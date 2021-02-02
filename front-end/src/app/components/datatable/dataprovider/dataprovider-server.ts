import { DataProvider } from "./dataprovider-interface";
import { DatatableComponent } from "../datatable.component";
import { DatatableService } from "../datatable.service";
import { HttpResponse, HttpParams } from "@angular/common/http";
import { LazyLoadEvent } from "primeng/api";

export class ServerDataProvider implements DataProvider{

    public event: LazyLoadEvent;
    public query: any;

    constructor(
        private datatableComponent: DatatableComponent,
        private datatableService: DatatableService
    ){
        this.datatableComponent.pDatatable.lazy = true;
        this.datatableComponent.pDatatable.onLazyLoad
        .subscribe((event: LazyLoadEvent) => { this.event = event; this.load();});
    }

    paginate(){
        if (this.event !== undefined && this.event.first > 0) {
            return Math.floor(this.event.first / this.datatableComponent.rows);
        }else{
            return 0;
        }
    }

    load(): Promise<any>{
        return new Promise<void>((resolve, reject) => {
            //this.page = this.paginate();
            let httpParams: HttpParams = this.getParams();
            if(this.datatableComponent.url != ''){
            	this.datatableService.query(this.datatableComponent.url, httpParams)
            	.toPromise().then((response: HttpResponse<any>) => {
                	this.datatableComponent.pDatatable.totalRecords = +response.headers.get('x-total-count');
                	this.datatableComponent.pDatatable.value = response.body;
                	this.datatableComponent.loading = false;
                	resolve();
            	},(error) => {
                	this.datatableComponent.loading = true
                	reject();
            	});
			}
        });
    };

	public getParams(): HttpParams {
		
		let httpParams: HttpParams = new HttpParams()
        .set('page', this.paginate().toString())
        .set('size', this.event.rows.toString());

        if(this.event.sortField !== undefined){
            httpParams = httpParams.append('sort', this.event.sortField + ',' + (this.event.sortOrder == 1 ? 'asc':'desc'));
        }

        if(Object.keys(this.event.filters).length){
            Object.keys(this.event.filters).forEach((key) => {
                httpParams = httpParams.append(this.dotToCamelCase(key) + this.event.filters[key].matchMode, (this.event.filters[key].value == undefined ? '' : this.event.filters[key].value));
                
            });
        }
                    
        return httpParams;
	}

    reset(){
        this.event.first = 0;
        this.datatableComponent.pDatatable.first = 0;
        this.datatableComponent.buttonDisabled = true;
    }

    dotToCamelCase(key){
        return key.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\./g,'');
    }
}

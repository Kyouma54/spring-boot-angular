
import { DatatableComponent } from "../datatable.component";
import { DataProvider } from "./dataprovider-interface";
import { HttpParams } from "@angular/common/http";

export class MemoryDataProvider implements DataProvider {
    
    constructor(
        private datatableComponent: DatatableComponent
    ){}

    load(): Promise<any>{
        return new Promise<void>((resolve, reject) => {
            this.datatableComponent.pDatatable.value = this.datatableComponent.value;
            this.datatableComponent.pDatatable.totalRecords = this.datatableComponent.value.length;
            this.datatableComponent.loading = false;
            resolve();
        });
    }

    reset(){
        this.datatableComponent.pDatatable.first = 0;
    }

	public getParams(): HttpParams {
		return null;
	}
}
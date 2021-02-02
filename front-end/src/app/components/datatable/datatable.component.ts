import { Component, OnInit, Input, Output, EventEmitter,
    ViewChild, AfterViewInit, ChangeDetectorRef, ContentChildren,
    AfterContentInit, ElementRef, ViewChildren, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { DataProvider } from './dataprovider/dataprovider-interface';
import { DataProviderFactory } from './dataprovider/dataprovider-factory';
import { Table } from 'primeng/table';
    @Component({
        selector: 'mirante-datatable',
        templateUrl: './datatable.component.html',
        styleUrls: ['./datatable.component.css']
    })
    export class DatatableComponent implements OnInit, AfterViewInit, AfterContentInit {

        @ViewChild('pDatatable')
        public pDatatable: Table;

        @ViewChildren('pFilter')
        public pFilter: ElementRef<HTMLElement>[];

        @ContentChildren('column')
        public columns: any;

        @ContentChildren('button')
        public buttons: any;

        @Input()
        public value: any[];

        @Input()
        public rows: number;

        @Input()
        public type: string;

        @Input()
        public url: string = '';

        @Input()
        public exportar: boolean = false;

        @Input()
        public roleExportar: string;

        @Input()
        public toggle: boolean = false;

        @Input()
        public selectionMode: string;

        @Output()
        public onRowSelect = new EventEmitter();

        @Output()
        public onRowUnselect = new EventEmitter();

        @Output()
        public onButtonClick = new EventEmitter();

        public dataProvider: DataProvider;

        public calendario: any =  {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["ja", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            today: 'Hoje',
            clear: 'Clear',
            dateFormat: "dd/mm/yy",
            weekHeader: 'Wk'
        };

        public columnJson: Array<any> = [];

        public selectedColumns: Array<any> = [];

        public selectedData: any;

        public loading: boolean = false;

        public buttonDisabled: boolean = true;

        constructor(
            private dataProviderFactory: DataProviderFactory,
            private changeDetectorRef: ChangeDetectorRef
        ) { }

        ngOnInit() { 
            this.dataProvider = this.dataProviderFactory.create(this.type, this);
        }

        ngAfterContentInit(){
            this.getColumns();
        }

        ngAfterViewInit(){
            this.pDatatable.ngAfterContentInit();
            this.changeDetectorRef.detectChanges();
        }

        emitSelected(event){
            this.onRowSelect.emit(this.selectedData);
            this.buttonDisabled = false;
        }

        emitUnselected(event){
            this.onRowUnselect.emit(this.selectedData);
            this.buttonDisabled =  this.selectedData == null || this.selectedData.length === 0;
        }

        emitButtonClick(event){
            this.onButtonClick.emit(event.name);
        }

        getValues(row: any, value: string): any {
            let col: any = row;
            if (value !== undefined) {
                value.split('.').forEach(e => {
                    col = col[e];
                });
            }
            return col;
        }

        getColumns(){
            this.columns.forEach(e => {
                this.columnJson.push({header: e.header, value: e.value, type: e.type, filterDropdown: e.filterDropdown,
                    headerTemplate: e.headerTemplate, valueTemplate: e.valueTemplate})
            });
            this.selectedColumns = this.columnJson;
        }

        totalRecords(): string{
            if(this.pDatatable.totalRecords == 0){
                return '';
            }
            if(this.pDatatable.first + this.pDatatable.rows < this.pDatatable.totalRecords){
                return 'Exibindo: ' + (this.pDatatable.first + 1) + ' a ' + (this.pDatatable.first + this.pDatatable.rows) + ' de ' + this.pDatatable.totalRecords + ' registros';
            }else{
                return 'Exibindo: ' + (this.pDatatable.first + 1) + ' a ' + this.pDatatable.totalRecords + ' de ' + this.pDatatable.totalRecords + ' registros';
            }
        }

        refresh(){
            this.dataProvider.load().then(response => this.dataProvider.reset())
        }

        clearFilter(){
           this.pFilter.forEach((value: ElementRef) => {
                value.nativeElement.value = "";
                value.nativeElement.dispatchEvent(new Event('input'));

           });

            console.log(this.pDatatable.filters);
            this.pDatatable.filters = {};


            console.log(this.pDatatable.filters);
        }

        setDate(date: Date){
            return date.toLocaleDateString('pt-BR')
        }
    }

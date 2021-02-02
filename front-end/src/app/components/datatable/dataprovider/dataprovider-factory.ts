import { Injectable } from '@angular/core';
import { DatatableService } from '../datatable.service';
import { DatatableComponent } from '../datatable.component';

import { ServerDataProvider } from './dataprovider-server';
import { MemoryDataProvider } from './dataprovider-memory';
import { DataProvider } from './dataprovider-interface';

@Injectable()
export class DataProviderFactory {

    constructor(private datatableService: DatatableService) {}

    public create(type: string, datatableComponent: DatatableComponent): DataProvider {
        if (type === 'server') {
            return new ServerDataProvider(datatableComponent, this.datatableService);
        }

        if (type == 'memory') {
            return new MemoryDataProvider(datatableComponent);
        }
    }
}
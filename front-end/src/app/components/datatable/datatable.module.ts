import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { PRIMENG_IMPORTS } from 'src/app/primeng-imports';
import { DataProviderFactory } from './dataprovider/dataprovider-factory';
import { DatatableService } from './datatable.service';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ColumnComponent } from './column.component';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
      DatatableComponent,
      ColumnComponent,
      ButtonComponent
    ],
  imports: [
    CommonModule,
    PRIMENG_IMPORTS
  ],
  exports: [DatatableComponent, ColumnComponent, ButtonComponent]
})
export class DatatableModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DatatableModule,
            providers: [
                { provide: DatatableService, useClass: DatatableService, deps: [HttpClient] },
                DataProviderFactory
            ]
        };
    }
}


import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'mirante-column',
  template: ''
})
export class ColumnComponent {

  @Input()
  public value: string;

  @Input()
  public sortable: boolean;

  @Input()
  public filter: any;

  @Input()
  public style: any;

  @Input()
  public header: string;

  @Input()
  public filterDropdown: SelectItem[] = [];

  @Input()
  public type: string;

  @ContentChild('header')
  public headerTemplate: TemplateRef<any>;

  @ContentChild('value')
  public valueTemplate: TemplateRef<any>;

}

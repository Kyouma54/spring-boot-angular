import { Component, Input } from '@angular/core';

@Component({
    selector: 'mirante-button',
    template: ''
})
export class ButtonComponent {

    @Input()
    public name:string;
    
    @Input()
    public icon: string;

    @Input()
    public pTooltip: string;

    @Input()
    public tooltipPosition: string;

    @Input()
    public style: string;

    @Input()
    public disabled: boolean;

}
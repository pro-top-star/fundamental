import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { MessageStates } from '@fundamental-ngx/core/form';
import { applyCssClass } from '@fundamental-ngx/cdk/utils';
import { CssClassBuilder } from '@fundamental-ngx/cdk/utils';
import { FD_LIST_MESSAGE_DIRECTIVE } from './tokens';

@Directive({
    selector: '[fd-list-message], [fdListMessage]',
    providers: [
        {
            provide: FD_LIST_MESSAGE_DIRECTIVE,
            useExisting: ListMessageDirective
        }
    ]
})
export class ListMessageDirective implements OnChanges, OnInit, CssClassBuilder {
    /** Type of the message. Can be 'success' | 'error' | 'warning' | 'information' */
    @Input()
    type: MessageStates;

    /** Apply user custom styles */
    @Input()
    class: string;

    /** @hidden */
    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    /** @hidden
     * CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    @applyCssClass
    buildComponentCssClass(): string[] {
        return ['fd-list__message', this.type ? 'fd-list__message--' + this.type : '', this.class];
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}

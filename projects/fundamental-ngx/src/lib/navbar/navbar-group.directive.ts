import { Directive, Input, ElementRef, Inject } from '@angular/core';
import { CustomClassBaseComponent } from '../utils/custom-class-base-component';

@Directive({
    selector: '[fd-navbar-group]'
})
export class NavbarGroupDirective extends CustomClassBaseComponent {
    @Input() position: string = '';
    @Input() hasLaunchpad: boolean = false;

    _setProperties() {
        this._addClassToElement('fd-global-nav__group');
        if (this.position) {
            this._addClassToElement('fd-global-nav__group--' + this.position);
        }
        if (this.hasLaunchpad) {
            this._addClassToElement('fd-global-nav__launchpad');
        }
    }

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super(elementRef);
    }
}

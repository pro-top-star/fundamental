import { Directive, forwardRef } from '@angular/core';
import { CONTENT_DENSITY_DIRECTIVE, DeprecatedCompactDirective } from '@fundamental-ngx/core/content-density';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-list][compact], [fdList][compact]',
    providers: [
        {
            provide: CONTENT_DENSITY_DIRECTIVE,
            useExisting: forwardRef(() => DeprecatedListContentDensityDirective)
        }
    ]
})
export class DeprecatedListContentDensityDirective extends DeprecatedCompactDirective {
    constructor() {
        super('[fd-list][compact], [fdList]');
    }
}

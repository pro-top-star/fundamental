import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import { DestroyedService } from '@fundamental-ngx/cdk/utils';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'fd-carousel-dynamic-items-example',
    templateUrl: './carousel-dynamic-items-example.component.html',
    styleUrls: ['./carousel-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyedService]
})
export class CarouselDynamicItemsExampleComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel')
    elementRef: ElementRef;

    width = '900px';
    visibleSlidesCount = 3;
    cardsHidden = [];

    constructor(private _changeDetectorRef: ChangeDetectorRef, private readonly _destroy$: DestroyedService) {}

    ngOnInit(): void {
        fromEvent(window, 'resize')
            .pipe(debounceTime(60), takeUntil(this._destroy$))
            .subscribe(() => this.updateLayout());
    }

    ngAfterViewInit(): void {
        this.updateLayout();
    }

    isHidden(card: string): boolean {
        return this.cardsHidden.some((_card) => _card === card);
    }

    update(): void {
        this._changeDetectorRef.detectChanges();
    }

    updateLayout(): void {
        const width = this.elementRef.nativeElement?.getBoundingClientRect().width;
        if (width > 0 && width < 600) {
            this.visibleSlidesCount = 1;
            this.width = '300px';
        } else if (width >= 600 && width < 900) {
            this.visibleSlidesCount = 2;
            this.width = '600px';
        } else if (width >= 900) {
            this.visibleSlidesCount = 3;
            this.width = '900px';
        }
        this._changeDetectorRef.detectChanges();
    }
}

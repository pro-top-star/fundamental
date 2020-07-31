import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthViewComponent } from './calendar-month-view.component';
import { By } from '@angular/platform-browser';
import { CalendarService } from '../../calendar.service';

describe('CalendarMonthViewComponent', () => {
    let component: CalendarMonthViewComponent;
    let fixture: ComponentFixture<CalendarMonthViewComponent>;
    const testMonth = 5;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarMonthViewComponent],
            providers: [CalendarService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarMonthViewComponent);
        component = fixture.componentInstance;
        component.id = 'test';
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have 12 months', () => {
        expect(component.monthNames).toBeDefined();
        const monthList: string[] = [].concat.apply([], component.monthNames);
        expect(monthList.length).toBe(12);
    });

    it('Should trigger a click event', () => {
        spyOn(component, 'selectMonth');
        fixture.debugElement.query(By.css('td')).nativeElement.click();
        expect(component.selectMonth).toHaveBeenCalled();
    });

    it('Should have is-active class when the month is selected', () => {
        const element = fixture.debugElement.query(By.css('td')).nativeElement;

        (component as any)._cdRef.detectChanges();
        expect(element.classList.contains('is-active')).toBe(false);

        component.selectMonth(0);
        fixture.detectChanges();
        (component as any)._cdRef.detectChanges();
        const selectedElement = fixture.debugElement.query(By.css('td')).nativeElement;
        expect(selectedElement.classList.contains('is-active')).toBe(true);
    });

    it('Should focus the month below with ArrowDown', () => {
        const focusSpy = spyOn(component, 'focusElement');
        const event = {
            key: 'ArrowDown',
            preventDefault: () => {}
        };
        component.onKeydownMonthHandler(event, testMonth);
        expect(focusSpy).toHaveBeenCalledWith('#test-fd-month-8');
    });

    it('Should focus the month above with ArrowUp', () => {
        const focusSpy = spyOn(component, 'focusElement');
        const event = {
            key: 'ArrowUp',
            preventDefault: () => {}
        };
        component.onKeydownMonthHandler(event, testMonth);
        expect(focusSpy).toHaveBeenCalledWith('#test-fd-month-2');
    });

    it('Should focus the month to the left with ArrowLeft', () => {
        const focusSpy = spyOn(component, 'focusElement');
        const event = {
            key: 'ArrowLeft',
            preventDefault: () => {}
        };
        component.onKeydownMonthHandler(event, testMonth);
        expect(focusSpy).toHaveBeenCalledWith('#test-fd-month-4');
    });

    it('Should focus the month to the right with ArrowRight', () => {
        const focusSpy = spyOn(component, 'focusElement');
        const event = {
            key: 'ArrowRight',
            preventDefault: () => {}
        };
        component.onKeydownMonthHandler(event, testMonth);
        expect(focusSpy).toHaveBeenCalledWith('#test-fd-month-6');
    });

    it('Should select a month with Enter', () => {
        const event = {
            key: 'Enter',
            preventDefault: () => {}
        };
        component.onKeydownMonthHandler(event, testMonth);
        expect(component.monthSelected).toEqual(6);
    });

    it('Should select a month with Space', () => {
        const event = {
            key: ' ',
            preventDefault: () => {}
        };
        component.onKeydownMonthHandler(event, testMonth);
        expect(component.monthSelected).toEqual(6);
    });

    it('Should generate grid', () => {
        expect(component.monthNames).toBeDefined();

        const sizes: number[] = component.monthNames.map((list) => list.length);

        expect(sizes).toEqual([3, 3, 3, 3]);
    });
});

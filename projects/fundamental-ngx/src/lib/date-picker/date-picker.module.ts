import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { UtilsModule } from '../utils/utils.module';
import { PopoverModule } from '../popover/popover.module';
import { CalendarModule } from '../calendar/calendar.module';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from '../input-group/input-group.module';

import { DatePickerComponent } from './date-picker.component';

@NgModule({
    declarations: [DatePickerComponent],
    imports: [CommonModule, IconModule, UtilsModule, PopoverModule, CalendarModule, FormsModule, InputGroupModule],
    exports: [DatePickerComponent]
})
export class DatePickerModule {}

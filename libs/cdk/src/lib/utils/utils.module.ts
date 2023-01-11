import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtlService } from './services/rtl.service';
import { ThemesService } from './services/themes.service';
import {
    AutoCompleteModule,
    ClickedBehaviorModule,
    DisabledBehaviorModule,
    FocusableItemModule,
    FocusableListModule,
    InitialFocusModule,
    LineClampModule,
    OnlyDigitsModule,
    OverflowListModule,
    ReadonlyBehaviorModule,
    RepeatModule,
    ResizeModule,
    SelectableListModule,
    TemplateModule,
    TruncateModule
} from './directives';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';

@NgModule({
    imports: [
        CommonModule,
        FocusableItemModule,
        FocusableListModule,
        DragAndDropModule,
        OnlyDigitsModule,
        TruncateModule,
        LineClampModule,
        OverflowListModule,
        RepeatModule,
        ResizeModule,
        TemplateModule,
        AutoCompleteModule,
        DisabledBehaviorModule,
        SelectableListModule,
        ReadonlyBehaviorModule,
        ClickedBehaviorModule,
        FocusableListModule,
        FocusableItemModule,
        DisabledBehaviorModule,
        InitialFocusModule
    ],
    exports: [
        FocusableItemModule,
        FocusableListModule,
        DragAndDropModule,
        OnlyDigitsModule,
        TruncateModule,
        LineClampModule,
        OverflowListModule,
        RepeatModule,
        ResizeModule,
        TemplateModule,
        AutoCompleteModule,
        DisabledBehaviorModule,
        SelectableListModule,
        ReadonlyBehaviorModule,
        ClickedBehaviorModule,
        FocusableListModule,
        FocusableItemModule,
        DisabledBehaviorModule,
        InitialFocusModule
    ],
    providers: [RtlService, ThemesService]
})
export class UtilsModule {}

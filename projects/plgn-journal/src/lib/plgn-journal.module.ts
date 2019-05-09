import { NgModule } from '@angular/core';
import { PlgnJournalComponent } from './plgn-journal.component';
import { JournalComponent } from './journal/journal.component';
import { CommonModule } from '@angular/common';
import { KendoUiAngularModule, CoreFoundationModule } from 'core-foundation';

@NgModule({
  declarations: [PlgnJournalComponent,
    JournalComponent],

  imports: [
    CommonModule,
    KendoUiAngularModule,
    CoreFoundationModule
  ],
  exports: [
    PlgnJournalComponent,
    JournalComponent
  ]
})
export class PlgnJournalModule { }

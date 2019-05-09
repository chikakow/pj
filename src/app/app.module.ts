import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlgnJournalModule } from 'plgn-journal';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlgnJournalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

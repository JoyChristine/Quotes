import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesItemComponent } from './quotes/quotes-item/quotes-item.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotesComponent,
    QuotesItemComponent,
    QuotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

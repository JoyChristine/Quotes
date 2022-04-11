import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesItemComponent } from './quotes/quotes-item/quotes-item.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { BtnDeleteComponent } from './quotes/quotes-list/btn-delete/btn-delete.component';
import { HighlightDirective } from './highlight.directive';







@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesItemComponent,
    QuotesListComponent,
    DateAgoPipe,
    BtnDeleteComponent,
    HighlightDirective
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

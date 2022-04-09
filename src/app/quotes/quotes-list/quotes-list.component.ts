import { Quote } from '@angular/compiler';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  
  quotes : Quotes[] =[
    new Quotes('an apple a day keeps a doctor away','doctor mike',0,0,'Your name'),
    new Quotes('an apple a day keeps a doctor away ','mwikali',0,0,'Your name'),
   new Quotes('water is life','joy',0,0,'Your name'),
   new Quotes('water is life','joy',0,0,'Your name'),

  ];
  faCoffee = faCoffee;
 
  constructor() { }

  ngOnInit(): void {
  }

}

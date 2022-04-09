import { Component, OnInit } from '@angular/core';

import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
 

  quotes : Quotes[] =[
    new Quotes('an apple a day keeps a doctor away','doctor mike',0,0),
    new Quotes('The way','mwikali',0,0),
    new Quotes('water is life','joy',0,0),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

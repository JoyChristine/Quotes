import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-quotes-item',
  templateUrl: './quotes-item.component.html',
  styleUrls: ['./quotes-item.component.css']
})
export class QuotesItemComponent implements OnInit {
  quotes : Quotes[] =[
    new Quotes('an apple a day keeps a doctor away','doctor mike')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

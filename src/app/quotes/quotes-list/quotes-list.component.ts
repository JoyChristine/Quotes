import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  quotes : Quotes[] =[
    new Quotes('an apple a day keeps a doctor away','doctor mike')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

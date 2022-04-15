import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-quotes-item',
  templateUrl: './quotes-item.component.html',
  styleUrls: ['./quotes-item.component.css']
})
export class QuotesItemComponent implements OnInit {
  quote!: string;
  author!: string;
  name!: string;
  
  // newQuote!: Quotes;

  @Output() add = new EventEmitter<Quotes>();
  
  quoted = new Quotes("","",0,0,"",new Date());

  addQuote(){
  this.add.emit(this.quoted);
  this.quoted = new Quotes("","",0,0,"",new Date());
    }
  
  // greeting = "Hello, world!";
  constructor(){}

  ngOnInit(): void {
  }

}

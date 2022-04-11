
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  
  @Input()
  myquotes!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  
  upvote(){
    this.myquotes.upvote+=1;
    console.log(this.upvote)
  }
  downvote(){
    this.myquotes.downvote+=1;
  }

  quotes : Quotes[] =[
    new Quotes('Nothing is impossible. The word itself says ‘I’m possible!','Audrey Hepburn',0,0,'Joy',new Date(2022,3,8)),
    new Quotes('The bad news is time flies. The good news is you’re the pilot.','Michael Altshuler',0,0,'Christine',new Date(2022,2,10)),
   new Quotes('You are never too old to set another goal or to dream a new dream','Malala Yousafzai',0,0,'Samuel',new Date(2021,2,9)),
   new Quotes('Faith without action is dead','James',0,0,'Grace',new Date(2019,9,9)),

  ];
  
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addedQuote(quote: Quotes){
    this.quotes.push(quote)
  }
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  // arr: number[] = this.quotes.map(quote=>quote.upvote)
  // highestUpvote = Math.max(...this.arr)  
  highestUpvote() {
    let quotesUp =[],
       bestVote: number
       
    for(let i = 0; i < this.quotes.length; i++) {
      quotesUp.push(this.quotes[i].upvote)
    }
    quotesUp.sort(function(a,b){
      return b - a
    })
    bestVote = quotesUp[0]
    return bestVote
  }
  
 
  constructor() { }

  ngOnInit(): void {
  }

}

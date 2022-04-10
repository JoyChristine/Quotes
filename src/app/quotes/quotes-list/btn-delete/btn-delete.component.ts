import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes.model';

@Component({
  selector: 'app-btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.css']
})
export class BtnDeleteComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote(){
    this.quote.upvote+=1;
  }
  downvote(){
    this.quote.downvote+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

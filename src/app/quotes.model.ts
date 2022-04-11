export class Quotes {
    push(event: Quotes) {
      throw new Error('Method not implemented.');
    }
    
    showInfo: boolean = false;
    constructor(public quote:string,public author:string,public upvote:number,public downvote:number,public name:string,public completeDate: Date) {}
}

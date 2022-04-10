export class Quotes {
    showInfo: boolean = false;
    constructor(public quote:string,public author:string,public upvote:number,public downvote:number,public name:string,public completeDate: Date) {}
}

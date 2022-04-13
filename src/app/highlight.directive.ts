import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    // elem.nativeElement.style.backgroundColor = '#086599',color='#FFFFFF';
    let el = this.elem.nativeElement;
    // Option 1
    
    el.style.background = '#086599';
   }

}

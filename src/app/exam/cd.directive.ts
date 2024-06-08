import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[directive24px]'
})
export class CdDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.fontSize='24px';
    //console.log(el)
    //el.nativeElement.onclick(()=>window.alert('Hello'))
  }

}

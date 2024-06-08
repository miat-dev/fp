import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
class ContextClass {
  public pages: number[] = [1,2,3,4]
}
@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective {
  @Input('hideAfter') 
  set delay(value: number){
    this._delay=value;
    this.context.pages=[value,value*.5]
  }
  private _delay=0;
  get delay(){
    return this._delay;
  }
  private context = new ContextClass();

  constructor(
    private vcr: ViewContainerRef,
    private tr: TemplateRef<any>
  ) { }
    ngOnInit(){
      this.vcr.createEmbeddedView(this.tr,this.context);
      let cnt=1;
      const sid=setInterval(()=>{
        this.context.pages=[...this.context.pages]
        this.context.pages[this.context.pages.length-1]+=cnt;
      },1000);
      setTimeout(()=>{
        this.vcr.element;
        this.vcr.element.nativeElement.previousSibling.style.backgroundColor='#fafafa';
      },this.delay);
      //clearInterval(sid)
    }
}

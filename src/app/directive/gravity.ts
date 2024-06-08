import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[gravity]'
})
export class GravityDirective implements OnInit {
    @Input('gravity') direction: any
    // @Input() itemsPerPage: number = 2;
    //
    constructor(
        //private vcr:ViewContainerRef,
        //private tr:TemplateRef<any>,
        private el:ElementRef<any>
    ){

    }
    ngOnInit(){
        //this.vcr.createEmbeddedView(this.tr)
        //console.log(this.tr.elementRef.nativeElement.parentNode.clientHeight);
    }
    ngAfterViewInit(){
        //console.log(this.tr.elementRef.nativeElement.parentElement.clientHeight);
        //console.log(this.el);
        let placeHel=document.createElement('span');
        placeHel.setAttribute('height',this.el.nativeElement.parentElement.clientHeight)
        placeHel.setAttribute('width',this.el.nativeElement.parentElement.clientHeight)
        placeHel.setAttribute('class','SEARCH')
        //placeHel.eight=this.elr.nativeElement.parentElement.clientHeight
        //this.vcr.createEmbeddedView()
        //placeHel.innerHTML='Hello World'
        this.el.nativeElement.innerHTML = placeHel.outerHTML;
        this.el.nativeElement.setAttribute('class','freefall')
        //this.el.nativeElement.style.top=
        //console.log(this.el);

    }
}
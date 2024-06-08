import { AfterViewInit, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') search: string = '';

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerText;
    const index = text.indexOf(this.search);
    if (index >= 0) {
      const start = this.el.nativeElement.childNodes[0].textContent.indexOf(this.search);
      const end = start + this.search.length;
      const highlighted = document.createElement('span');
      highlighted.innerHTML = text.substring(0, start) +
        `<span class="highlight">${text.substring(start, end)}</span>` +
        text.substring(end);
      this.el.nativeElement.innerHTML = highlighted.outerHTML;

    }
  }
}

// <p highlight="Angular">Welcome to the world of Angular!</p>


// import { Directive, ElementRef, Renderer2, NgZone } from '@angular/core';
import { Renderer2, NgZone, Output, EventEmitter } from '@angular/core'
@Directive({
  selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective {
  @Output() onScrollEnd = new EventEmitter();
  private scrollListener: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollListener = this.renderer.listen(this.el.nativeElement, 'scroll', () => {
        const scrollHeight = this.el.nativeElement.scrollHeight;
        const scrollTop = this.el.nativeElement.scrollTop;
        const clientHeight = this.el.nativeElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
          this.onScrollEnd.emit();
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }
}

// <div class="list-container" infiniteScroll (onScrollEnd)="loadMoreItems()">
//   <ul class="item-list">
//     <li *ngFor="let item of items">{{ item }}</li>
//   </ul>
// </div>


//import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
class ContextClass {
  public pages: number[] = [420, 144, 370]
}
@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective implements OnInit {
  @Input('appPagination') temp: any
  // @Input() itemsPerPage: number = 2;
  // @Input() currentPage: number = 1;
  // @Input('appPaginationTotalItems') totalItems: any = {};
  itemsPerPage: number = 2;
  currentPage: number = 1;
  totalItems: number = 1;
  
  @Input('appPaginationInfo')
  set info(info: any) {
    this.itemsPerPage=info.itemsPerPage;
    this.currentPage=info.currentPage;
    this.totalItems=info.totalItems;
    //console.log(info)
  }
  @Output() pageChanged = new EventEmitter<number>();
  totalPages: number = 0;
  pages: number[] = [];
  private context = new ContextClass();
  constructor(
    private vcr: ViewContainerRef,
    private tr: TemplateRef<any>
  ) { }
  ngOnInit() {
    this.vcr.createEmbeddedView(this.tr, this.context);
    //console.log(this.itemsPerPage, this.currentPage, this.totalItems, this.temp)
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
    this.context.pages = this.pages;
  }
}

// <div class="pagination">
//   <ul>
//     <li *ngFor="let page of pages" [class.active]="page === currentPage">
//       <a href="#" (click)="pageChanged.emit(page)">{{ page }}</a>
//     </li>
//   </ul>
// </div>


// <div class="container">
//   <div class="item-list">
//     <div *ngFor="let item of pagedItems">
//       {{ item }}
//     </div>
//   </div>
//   <div class="pagination-wrapper" appPagination
//        [itemsPerPage]="itemsPerPage"
//        [currentPage]="currentPage"
//        [totalItems]="totalItems"
//        (pageChanged)="onPageChanged($event)">
//   </div>
// </div>
@Directive({
  selector: '[cord]'
})
export class CordDirective implements AfterViewInit{
  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private vcr: ViewContainerRef

  ) { }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let parentHeight=this.el.nativeElement.clientHeight;
      let parentWidth=this.el.nativeElement.clientWidth;
      let childCnt=this.el.nativeElement.childNodes.length;
      let svg=document.createElement('svg');
      svg.setAttribute('width','100%')
      //svg.setAttribute('viewBox','0 0 100 100')
      svg.style.position='absolute';
      svg.style.justifySelf='center';
      this.el.nativeElement.childNodes.forEach((child:any,idx:number)=>{
        let childWidth=child.clientWidth
        let path=document.createElement('path')
        path.setAttribute('d',`m ${parentWidth/2} 2 L${idx*parentWidth/childCnt+childWidth/2} 15`)
        //path.setAttribute('d',`m ${10/2} 2 L3 15`)
        path.setAttribute('stroke','black')
        svg.appendChild(path);
      })
      //this.el.nativeElement.insertBefore(svg,this.el.nativeElement.firstChild)
      this.el.nativeElement.appendChild(svg)
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML;
      console.log(this.el)
    });
  }

}
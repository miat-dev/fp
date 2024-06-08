import { Component, ElementRef, OnInit } from "@angular/core"

@Component({
  selector: 'autodoc',
  template: `
      <div class="mmodal">
            <ng-content></ng-content>
      </div>
  `,
styles: [`
.mmodal {
    /* // makes it hover above all elements */
    z-index: 1000;
    background-color:#1e0b0f;
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* right:0; */
}

`]
})
export class AutodocComponent implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit() {
      // we added this so that when the backdrop is clicked the modal is closed.
      this.el.nativeElement.addEventListener('click', ()=> {
          //this.close()
      })
  }

}
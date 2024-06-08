import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Tree2Service } from './tree2.service';

@Component({
  selector: 'app-tree2',
  templateUrl: './tree2.component.html',
  styleUrls: ['./tree2.component.css']
})
export class Tree2Component {
  persons:any[]=[]
  constructor(private treeService:Tree2Service){}
  ngOnInit(){
    this.persons=this.treeService.persons;
  }
}

@Component({
  selector: 'app-f2child',
  templateUrl: './recur.component.html',
  styleUrls: []
})
export class F2childComponent {
  @Input() childs: any = []
  @Input() parentWidth: any = ""
  svgPaths:string[]=['M10 10 L10 10']
  @ViewChild('childsRef') childsRef:ElementRef<any>|undefined;
  constructor(private treeService:Tree2Service){
  }
  ngOnInit(){
    //console.log(this.childs)
    this.svgPaths=new Array(this.childs.length);
  }
  cord='m4 4 h50 v10 h-50 z';
  addNewItem(id:any){
    this.treeService.addNewItem(id,'Dummy Name');
  }
  width:any=11111111
  ngAfterViewInit(){
    let native=this.childsRef?.nativeElement
    console.log(this.parentWidth)
    this.width=native.clientWidth
    const n=native.childNodes.length-3;
    if(n>0){
      for(let i=0;i<n;i++){
        let factor=i-n/2;
        // if odd +.5 elseif not-veFactor +1
        (n&1)?factor+=0.5:(factor>=0)?factor+=1:null
        //console.log(i,n,i-n/2,factor)
        let temp=1.5*Math.floor(this.parentWidth)*factor;
        //(2*(i-2)<this.childs.length)?temp=-temp:temp;
        native.childNodes[i+2].style.left=temp+'px';
        //this.svgPaths[i]=`M ${native.clientWidth/2} 0 c 0 10 45 1 50 15`
      }
    }
    //console.log(native.childNodes)
  }
}
// 0 1 2 3 // -2 -1 1 2
// -2 -1 0 1
// 0 1 2 // -1 0 1
// -1.5 -0.5 0.5
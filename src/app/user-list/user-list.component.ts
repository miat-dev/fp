import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  counter:number=0;
  clickMessage="Not a two way binding value";
  clickMessage2way="A two way binding value";
  arr=[
    {name:'Owais Qadri',id:12,dist:'Banka'},
    {name:'Arsalan Khan',id:17,dist:'Banka'}
  ];
  inc(event?: any) {
    this.counter++;
    console.log(event)
  }
  dec(event?: any) {
    if(this.counter>0)
    this.counter--;
    console.log(event)
  }
  symarr:string[]=[]
  start:number=0;
  setstart(cal:any){
    console.log(cal)
    this.start=parseInt(cal);
    this.symarr=[]
    for(let i=this.start;i<this.start+1000;i++){
      this.symarr.push('&#x'+i.toString(16));
    }
  }
  ngOnInit(){
    this.arr.sort((a:any,b:any)=> {return a.id-b.id});
    
  }
}

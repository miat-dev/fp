import { Component,Input,OnInit } from '@angular/core';
import {MserviceService} from '../mservice.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  item:any={};

  today:Date=new Date();

  constructor(private myservice:MserviceService){
  }
  
  months=["January","February","March","April","June","July","August"];
  ngOnInit(){
      setInterval(()=>
    {
    this.today=this.myservice.showTodayDate()}
    ,1000)
    for(let i=0;i<(this.item.idx*15)%12;i++)
    arrayRotate(this.months,false)
}

  flag=this.months[2];
  changemonth(event:any,val:string): void{
    this.flag=val;
      console.log(event,val)
  }
}
function arrayRotate(arr:any, reverse:boolean) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}
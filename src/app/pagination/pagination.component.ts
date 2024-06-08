import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  marginOff:number=2.3;
  totalPages:number=0;
  currIdx: number = 8;
  elePos=[-this.marginOff,0,this.marginOff]
  eleData=[this.currIdx,this.currIdx+1,this.currIdx+2]
  eleIndex:number[]=[5,5,5];

  ngOnInit(){
    const switchdiv=document.getElementById('switchdiv');
    this.totalPages=switchdiv?.childNodes.length!==undefined?switchdiv?.childNodes.length:0;
  }
  leftPage() {
    //console.log(this.currIdx)
    if (this.currIdx > 0)
      {
        this.currIdx--;
        for(let i=0;i<3;i++)
        //this.elePos[i]=this.elePos[i]<1?this.elePos[i]+1.3:-1.3;
        if(this.elePos[i]<1){
          this.eleIndex[i]=5;
          this.elePos[i]=this.elePos[i]+this.marginOff
        }else{
          this.eleIndex[i]=-4;
          this.elePos[i]=-this.marginOff
          this.eleData[i]=this.currIdx
        }
      }
    }
    rightPage() {
      
      if (this.currIdx < this.totalPages - 1)
      {
        this.currIdx++;
        for(let i=0;i<3;i++)
        //this.elePos[i]=this.elePos[i]>-1?this.elePos[i]-1.3:1.3;
        if(this.elePos[i]>-1){
          this.eleIndex[i]=5;
          this.elePos[i]=this.elePos[i]-this.marginOff
        }else{
          this.eleIndex[i]=-4;
          this.elePos[i]=this.marginOff
          this.eleData[i]=this.currIdx+2
        }
      }
    //console.log(this.currIdx)
  }
}


import { trigger, state, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-example2',
  template: `<div>
 <div>
 <div *ngFor="let user of users">
 <button
 class="btn"
 [@buttonState]="user.active"
 (click)="user.changeButtonState()">{{user.firstName}}</button>
 </div>
 </div>
</div>`,
  styles: [`
 .btn {
 height: 30px;
 width: 100px;
 border: 1px solid rgba(0, 0, 0, 0.33);
 border-radius: 3px;
 margin-bottom: 5px;
 }
 `],
  animations: [
    trigger('buttonState', [
      state('true', style({
        background: '#04b104',
        transform: 'scale(1)'
      })),
      state('false', style({
        background: '#e40202',
        transform: 'scale(1.1)'
      })),
      transition('true => false', animate('1s ease-in')),
      transition('false => true', animate('1s ease-out'))
    ])
  ]
})
export class Example2 {
  users: Array<User> = [];
  constructor() {
    this.users.push(new User('Narco', false));
    this.users.push(new User('Bombasto', false));
    this.users.push(new User('Celeritas', false));
    this.users.push(new User('Magneta', false));
  }
}
class User {
  firstName: string;
  active: boolean;
  changeButtonState() {
    this.active = !this.active;
  }
  constructor(_firstName: string, _active: boolean) {
    this.firstName = _firstName;
    this.active = _active;
  }
}

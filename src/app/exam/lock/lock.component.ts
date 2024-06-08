import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lock',
  templateUrl: './lockwrapper.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent {
  content=[[document.createTextNode('___________++++___________')]]

  lockCompRef:any=LockWrapperComponent
  // context1={hello:'hello',$implicit:'MacSafe'};
  templateToggle=false;
  securityPass(){
    //alert('Hello')
    setTimeout(()=>
    {this.templateToggle=true;
      this.childTemRef=this.securityPassedTemRef
    }
    ,1500)// delay
  }
  childTemRef:TemplateRef<any>|null=null;
  @ViewChild('lockWrapper') lockWrapperTemRef!:any;
  @ViewChild('securityPassed') securityPassedTemRef!:any;
  ngAfterViewInit(){
    this.childTemRef=this.lockWrapperTemRef;
    // this.childTemRef=this.securityPassedTemRef
    // console.log(this.lockWrapperTemRef)
  }
  ngChange(){
   // console.log(this.childTemRef)
  }
}
@Component({
  selector: 'app-lock-wrapper',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockWrapperComponent {
  keypadBtn: any = [
    { digit: 1, code: '' },
    { digit: 2, code: 'ABC' },
    { digit: 3, code: 'DEF' },
    { digit: 4, code: 'GHI' },
    { digit: 5, code: 'JKL' },
    { digit: 6, code: 'MNO' },
    { digit: 7, code: 'PQRS' },
    { digit: 8, code: 'TUV' },
    { digit: 9, code: 'WXYZ' },
    { digit: 0, code: '+' }
  ]
  constructor() {
    this.lockSize = new Array(this.userPassLen);
  }

  @Output() onSecurityPass=new EventEmitter<any>();;
  lockSize: any;
  userPassLen: number = 6;
  password: string = '';
  addPassDigit(digit: number) {
    let ele = document.getElementsByClassName('passPlaceHolder')
    if (this.password.length < this.userPassLen) {
      ele[0].children[this.getEnteredLen].setAttribute('class', 'active')
      this.password += digit.toString();
      (this.password.length === this.userPassLen)?this.onSecurityPass.emit():''
    }
  }
  back() {
    let ele = document.getElementsByClassName('passPlaceHolder')
    if (this.password.length) {
      this.password = this.password.slice(0, this.password.length - 1)
      ele[0].children[this.getEnteredLen].setAttribute('class', '')
    }
  }
  get getEnteredLen() {
    return this.password.length
  }
}

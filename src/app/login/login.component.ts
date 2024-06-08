import { Component, OnInit } from '@angular/core';
import {  AuthService } from './lservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageName:string='signin';
  constructor(public authService:AuthService) {
  }
  ngOnInit() {
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.closeDialog()
      }
    });
    this.authService.authPageNav.subscribe((data)=>{
      this.pageName=data;
    })
  }

  authPageShow:boolean=false;
  showDialog() {
    if (this.authService.isLoggedIn) {
      this.authService.SignOut();
    }
    else {
      this.authPageShow=true;
    }
  }
  closeDialog() {
    this.authPageShow=false;
  }
 
}

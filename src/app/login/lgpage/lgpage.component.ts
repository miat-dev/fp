import { Component, OnInit } from '@angular/core';
import { AuthService } from '../lservice.service';

@Component({
  selector: 'app-lgpage',
  templateUrl: './lgpage.component.html',
  styleUrls: ['./lgpage.component.css']
})
export class LgpageComponent implements OnInit{
  constructor(public authService: AuthService) { }
  signInSubmit(userId: string, pass: string) {
    //this.loginServie.signInSubmit(userId,pass);
    let temp = this.authService.SignIn(userId, pass);
    // console.log(temp)
  }
  googleAuth() {
    this.authService.GoogleAuth()
  }
  signUpSubmit(name: string, userId: string, pass: string, pass2: string) {
    // verification  page 
  }
  transLogReg(opera: string) {
    const trans = document.getElementsByClassName('trans')[0]
    if (opera === 'signup')
      trans.classList.add('marginleft')
    else if (opera === 'signin')
      trans.classList.remove('marginleft')
  }
  ngOnInit() {
    this.authService.authPageNav.subscribe((data)=>{
      this.transLogReg(data)
    })
  }

}

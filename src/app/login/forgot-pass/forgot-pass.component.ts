import { Component } from '@angular/core';
import { AuthService } from '../lservice.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  constructor(public authService: AuthService){}
}

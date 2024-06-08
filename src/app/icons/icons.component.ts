import { Component, Input } from '@angular/core';

@Component({
  selector: 'Icon',
  templateUrl: './icons.component.html'
})
export class Icons {
  @Input() name:string='Unknown';
}

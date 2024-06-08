import { Component, Input } from '@angular/core';

@Component({
  selector: 'Exam',
  template: '<countdown-parent-lv >'
})
export class Exam {
  @Input() name:string='Unknown';
}

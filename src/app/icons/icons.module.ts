import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { Icons } from './icons.component';

@NgModule({
  declarations: [
    Icons  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    Icons
  ]
})
export class IconsModule { }

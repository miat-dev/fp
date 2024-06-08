import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exam } from './exam.component';
import { CountdownLocalVarParentComponent, CountdownTimerComponent} from './timer/timer.component';
import { CdDirective } from './cd.directive';
import { Exam2 } from './vscomm/vscomm.component';
import { FileHeader, FileRec, FileviewComponent } from './fileview/fileview.component';
import { AutodocComponent } from './autodoc/autodoc.component';
import { GravityDirective } from '../directive/gravity';
import { F2childComponent, Tree2Component } from './tree2/tree2.component';
import { CordDirective } from '../directive/chatGPT';
import { LockComponent, LockWrapperComponent } from './lock/lock.component';

//ng g c name_of_comp --module=exam/exam.module.ts 

@NgModule({
  declarations: [
    Exam,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    CdDirective,
    Exam2,
    FileviewComponent,
    FileRec,
    AutodocComponent,
    FileHeader,
    GravityDirective,
    CordDirective,
    Tree2Component,
    F2childComponent,
    LockComponent,
    LockWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Exam,
    Exam2,
    FileviewComponent,
    Tree2Component,
    LockComponent
  ]
})
export class ExamModule { }

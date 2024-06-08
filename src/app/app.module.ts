import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListComponent } from './list/list.component';
import { SquarePipe } from './app.square';
import { MserviceService } from './mservice.service';
import { WebsocketService } from './websocket.service';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { MNotifiComponent } from './m-notifi/m-notifi.component';
import { IconsModule } from './icons/icons.module';
import {HttpClientModule} from '@angular/common/http';
import { FtreeComponent } from './ftree/ftree.component'
import { FchildComponent } from './ftree/ftree.component'
import { ExamModule } from './exam/exam.module';
import { LoginComponent } from './login/login.component';
import { ModelComponent } from './login/model/model.component';
import { LgpageComponent } from './login/lgpage/lgpage.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { Example2, PaginationComponent } from './pagination/pagination.component';
import { HideAfterDirective } from './hide-after.directive';
import {  HighlightDirective, InfiniteScrollDirective, PaginationDirective } from './directive/chatGPT';
import { GravityDirective } from './directive/gravity';
import { Pagination2 } from './pagination/pagination2.component';
//import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ListComponent,
    SquarePipe,
    TodoComponent,
    MNotifiComponent,
    FtreeComponent,
    FchildComponent,
    LoginComponent,
    ModelComponent,
    LgpageComponent,
    VerifyEmailComponent,
    ForgotPassComponent,
    PaginationComponent,
    Example2,
    HideAfterDirective,
    HighlightDirective,
    InfiniteScrollDirective,
    PaginationDirective,
    Pagination2
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,
    ExamModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule,
    AngularFireAuthModule
  ],
  providers: [MserviceService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

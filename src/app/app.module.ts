import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JourneyComponent } from './journey/journey.component';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { TravelsService } from './services/travels.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMessageComponent } from './add-message/add-message.component';
import { SignupMessageComponent } from './signup-message/signup-message.component';
import { DeletemessageComponent } from './deletemessage/deletemessage.component';
import { UpdatemessageComponent } from './updatemessage/updatemessage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FpmessageComponent } from './fpmessage/fpmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    SignInComponent,
    SignUpComponent,
    JourneyComponent,
    Page1Component,
    HomeComponent,
    Page2Component,
    AddMessageComponent,
    SignupMessageComponent,
    DeletemessageComponent,
    UpdatemessageComponent,
    ForgetpasswordComponent,
    FpmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,TravelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

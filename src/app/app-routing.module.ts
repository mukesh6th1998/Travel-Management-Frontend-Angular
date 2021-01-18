import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMessageComponent } from './add-message/add-message.component';
import { AddComponent } from './add/add.component';
import { DeletemessageComponent } from './deletemessage/deletemessage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { JourneyComponent } from './journey/journey.component';
import { Page1Component } from './page1/page1.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupMessageComponent } from './signup-message/signup-message.component';
import { UpdateComponent } from './update/update.component';
import { UpdatemessageComponent } from './updatemessage/updatemessage.component';

const routes: Routes = [
  {path: "sign-in",component:SignInComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"page1",component:Page1Component},
  {path:"add",component:AddComponent},
  {path:"journey",component:JourneyComponent},
  {path:"update",component:UpdateComponent},
  {path:"addmessage",component:AddMessageComponent},
  {path:"signupmessage",component:SignupMessageComponent},
  {path:"deletemessage",component:DeletemessageComponent},
  {path:"updatemessage",component:UpdatemessageComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

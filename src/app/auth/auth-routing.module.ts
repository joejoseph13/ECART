import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const auth: Routes = [
  {path:'login', component:LoginComponent}
]





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(auth)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }

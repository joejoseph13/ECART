import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './core/interseptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AuthModule,
    BrowserAnimationsModule
    
  
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

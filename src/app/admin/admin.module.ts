import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RouterModule,Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../core/interseptors/token.interceptor';
import { EditmodalComponent } from './editmodal/editmodal.component';









@NgModule({
  declarations: [
    OrderComponent,
    CategoryComponent,
    ProductComponent,
    ProductModalComponent,
    CategoryModalComponent,
    EditmodalComponent,
    
    ],


    
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    SharedModule
    

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}],
  
  
})
export class AdminModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { EditmodalComponent } from './editmodal/editmodal.component';

const routes: Routes = [
 { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'promodal/:myModal', component:ProductModalComponent},
  { path: 'edit/:id', component: EditmodalComponent },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

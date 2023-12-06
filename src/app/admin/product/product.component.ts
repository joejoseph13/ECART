import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { adminCategory } from 'src/app/models/category';
import { adminProductdata } from 'src/app/models/product';
import { CategoryModalService } from 'src/app/services/category-modal.service';
import { ProductModalService } from 'src/app/services/product-modal.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  public categoryData: adminCategory[]=[];

  public productData: adminProductdata[]=[];

  public searchTerm: string = ''; // Add this property

  
  

  constructor(private categoryservice : CategoryModalService, private productService:ProductModalService, private formBuilder:FormBuilder,private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private router :Router){
    this.categoryservice.getCategory().subscribe((response:adminCategory[])=>{
      console.log(response)
      this.categoryData=response
    },
    (error)=>{
      console.log('error',error);
    });

    this.productService.getProducts().subscribe((res:adminProductdata[])=>{
      console.log(res)
      this.productData=res
    },
    (error)=>{
      console.log('error', error);
    }
    )
    
  }

  delProducts(id:number){
    this.productService.deleteProducts(id).subscribe((res)=>{
      alert('deleted');
      window.location.reload();
    })
  }
  
  get filteredProducts(): adminProductdata[] {
    return this.productData.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onEditItemClick(itemId: number) {
    // Use the Router to navigate to the edit route with the item.id as a parameter
    this.router.navigate(['/admin/edit', itemId]);
  
    // Optionally, you can also trigger the Bootstrap modal programmatically here
    // by using JavaScript or Angular code, depending on your setup.
  }


 


}



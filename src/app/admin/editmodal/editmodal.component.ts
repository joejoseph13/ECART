import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { adminProductdata } from '../../models/product';

import { ProductModalService } from 'src/app/services/product-modal.service';
import { adminCategory } from 'src/app/models/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
export class EditmodalComponent  {
  
  myForm!: FormGroup;
  productId: number;
  product: adminProductdata;
  categoryData: adminCategory[];

  constructor(
    private editproductService: ProductModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.params['id']);
    this.initializeForm();
    this.getProductDetails();
    this.loadCategories();
  }

  initializeForm(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null),
      categoryId: new FormControl(null),
      stock: new FormControl(null),
      price: new FormControl(null),
      description: new FormControl(null),
      image: new FormControl(null, Validators.required),
    });
  }

  getProductDetails(): void {
    this.editproductService.getProductById(this.productId).subscribe(
      (response: adminProductdata) => {
        this.product = response;
        this.myForm.patchValue({
          name: this.product.name,
          categoryId: this.product.categoryId,
          stock: this.product.stock,
          price: this.product.price,
          description: this.product.description,
          image: this.product.image
        });
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  onEditForm(): void {
    console.log(this.productId);
    
    if (this.myForm.valid) {
      
      const base64String = this.imageSrc.split(',')[1];

      const editedProduct: adminProductdata = {
        id: this.productId,
        name: this.myForm.value.name,
        stock: this.myForm.value.stock,
        price: this.myForm.value.price,
        description: this.myForm.value.description,
        image: base64String,
        categoryId: this.myForm.value.categoryId,
        status: '',
        createdBy: '',
        createdDate: '',
        lastModifiedBy: '',
        lastModifiedDate: ''
      };

      this.editproductService.editProduct(editedProduct).subscribe(
        (response) => {
          console.log('Product updated', response);
          this.router.navigateByUrl('/admin/product');
        
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
  }

  loadCategories() {
    this.editproductService.getCategories().subscribe(
      (data: adminCategory[]) => {
        this.categoryData = data;
      },
      error => {
        console.error('Error loading categories:', error);
      }
    );
  }

  onCancel(): void {
    this.router.navigateByUrl('/admin/product');
  }

  imageSrc: any = '';

  onFileChanged(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }
 
}

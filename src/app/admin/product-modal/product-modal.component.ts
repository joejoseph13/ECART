import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { adminProductdata } from 'src/app/models/product';
import { ProductModalService } from 'src/app/services/product-modal.service';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  

  

  productData: any = {};

  categories: any[ ] = [ ];
  
  imageSrc: any = ''; // To store the base64 image data

  constructor( private productmodalservice:ProductModalService, private router: Router){}

  @ViewChild('productForm') productForm!: NgForm;

  ngOnInit(){
    this.fetchCategories();
  }

  fetchCategories(){
    this.productmodalservice.getCategories().subscribe((
      response:string[])=>{
        this.categories=response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onSubmit(_data: adminProductdata){
    if (this.productForm.valid){
      if (this.imageSrc) {
        // Convert the image to base64
        const base64String = this.imageSrc.split(',')[1];

        // Add the base64 image data to the category data
        _data.image = base64String;
      }
      console.log(this.productForm.value)
      

      this.productmodalservice.addProducts(_data).subscribe(
        (response)=> {
          console.log('product data sent successfully:',response);
          this.productForm.resetForm();
          window.location.reload();
        },

        (error)=>{
          console.error('error sending data:', error);
        }
      );
      
      
    }
  }
  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result; // bind the data URL to the imageSrc property
    };
    reader.readAsDataURL(file);
  }

}

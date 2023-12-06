import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryModalService } from 'src/app/services/category-modal.service';
import { adminCategory } from 'src/app/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent {

  categoryData: any =  {};
  imageSrc: any = ''; // To store the base64 image data
  
  constructor(private categorymodalservice: CategoryModalService, private router: Router) {}

  @ViewChild('categoryForm') categoryForm!: NgForm;

  onSubmit(_data: adminCategory) {
    if (this.categoryForm.valid) {
      if (this.imageSrc) {
        // Convert the image to base64
        const base64String = this.imageSrc.split(',')[1];

        // Add the base64 image data to the category data
        _data.image = base64String;
      }

      this.categorymodalservice.addCategory(_data).subscribe(
        (response) => {
          console.log('Category data sent successfully:', response);
          this.categoryForm.resetForm();
          window.location.reload();
        },
        (error) => {
          console.error('Error sending data:', error);
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

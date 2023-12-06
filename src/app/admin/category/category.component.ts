import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { adminCategory } from 'src/app/models/category';
import { CategoryModalService } from 'src/app/services/category-modal.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  public categoryData: adminCategory[]=[];

  public searchTerm : string = ''; // Add this property


  constructor(private categoryservice: CategoryModalService, private formBuilder:FormBuilder){
    this.categoryservice.getCategory().subscribe((response: adminCategory[])=>{
      console.log(response)
      this.categoryData = response;
    },
    (error)=>{
      console.log('error', error);
    }
    
    );
  }

  // delCat(id:number){
  //   this.categoryservice.deleteCategory(id).subscribe((res)=>{
  //     alert('deleted');
  //     window.location.reload();
  //   })
  // }

  delCat(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this category?');
    
    if (confirmation) {
      this.categoryservice.deleteCategory(id).subscribe((res) => {
        alert('Category deleted successfully.');
        window.location.reload();
      });
    } else {
      // User clicked Cancel, do nothing or handle accordingly
      alert('Deletion cancelled.');
    }
  }
  






  get filteredProducts(): adminCategory[] {
    return this.categoryData.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}

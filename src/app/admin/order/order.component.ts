import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { orderproduct } from 'src/app/models/order';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  data:orderproduct[]=[];

  constructor(private orderService: OrderserviceService, private rourter:Router){
    this.orderService.displayOrder().subscribe((res)=>{
      this.data=res
    });
  }

  deleteOrder(id:number){
    this.orderService.deleteOrder(id).subscribe((res)=>{
      if(res){
        alert('product deletd');
        console.log('prod deleted', res);
      }
    })

  }

  

 

}

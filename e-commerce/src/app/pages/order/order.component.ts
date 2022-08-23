import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  user_id:any;
  orders:any;
  constructor(
    private orserService : OrderService,
    private router : Router ) { }

  ngOnInit(): void {
   
   this.user_id = localStorage.getItem('userData');
   const user_id = JSON.parse(this.user_id);
   const id = user_id.id; 
   this.orserService.ordersDetail(id).subscribe(res => {
   this.orders = res.data;
    
   })
  }
onDetails(id: number){
  this.orserService.OrderId = id;
  this.router.navigate(["order_details"]);
}
}

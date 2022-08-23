import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-order-detils',
  templateUrl: './order-detils.component.html',
  styleUrls: ['./order-detils.component.css']
})
export class OrderDetilsComponent implements OnInit {
  user_id:any;
  details:any;
  id:any;
  constructor(private orderService :OrderService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userData');
   const user_id = JSON.parse(this.user_id);
   const userId = user_id.id; 

    this.id = this.orderService.OrderId;
    this.orderService.ordersDetail(userId).subscribe(res => {
      console.log(res.data);
      this.details = res.data;
      
    })
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface orderId {
  success: boolean;
  data: [{ 
      user_id : number;
      
  }];
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  OrderId: any;
  constructor(private http : HttpClient){}

  ordersDetail(id:number) {
    return this.http.post<orderId>("http://95.111.202.157/mangoproject/public/api/order-list-ustora",{
      user_id: id
    }
    )
  }
}

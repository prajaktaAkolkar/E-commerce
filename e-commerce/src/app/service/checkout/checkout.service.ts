import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Checkout } from 'src/app/model/checkout.model';
import { Payment } from 'src/app/model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  countries:any = [];
  totalfinalAmount:any;
  constructor(private http : HttpClient){}
  getCountries(){
      return this.countries = [
      "Afghanistan","Albania","Algeria","Argentina","Austria","Bahamas","Bangladesh","Canada","Chile","China","Dominica",
      "Egypt","France","Vatican"
      ]
  }
  postDetails(details:any , id:number, token: string) {        

     this.http.post<Checkout>("http://95.111.202.157/mangoproject/public/api/checkout-ustora",
      {
          user_id: id, 
          compony_name: details['company'],
          email: details['email'],
          first_name: details['first_name'],
          last_name : details['last_name'],
          address1: details['address1'],
          address2: details['address2'],
          zip_code: details['postcode'],
          country: details['country'],
          state: details['state'],
          city: details['city'],
          phone: details['phone'],
          optional_address: details['optional'],
          token: true

      }
      ).subscribe();
  }
  paymentMethod(card_name:string, id:number, total_ammount:any) {
      console.log(total_ammount);
      
      this.http.post<Payment>("http://95.111.202.157/mangoproject/public/api/payment-details-ustora",{
          user_id:id,
          card_name: card_name,
          total_amount: total_ammount

      }).subscribe();
  }
}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Checkout } from 'src/app/model/checkout.model';
import { CartService } from 'src/app/service/cart/cart.service';
import { CheckoutService } from 'src/app/service/checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutform:any;
countries:any =[];
user_token:any;
totalAmount: any;
user_id: any;
  constructor(
    private checkoutService: CheckoutService,
    private router: Router,
    private cart: CartService) { }

  ngOnInit(): void {
    this.totalAmount = this.checkoutService.totalfinalAmount;
    console.log(this.totalAmount);
    
    this.user_id = localStorage.getItem('userData');

    this.countries = this.checkoutService.getCountries();
  
    this.checkoutform = new FormGroup({
      checkoutInfo : new  FormGroup({
        first_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        company: new FormControl(null, Validators.required),
        address1: new FormControl(null, Validators.required),
        address2: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        postcode: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required,),
        optional: new FormControl(null, Validators.required,)

      })
    });
  
  //    this.totalAmount = this.cart.gettotal();
  //  console.log(this.totalAmount);  
    }
    onSubmit() {
      this.checkoutform;
       const details = this.checkoutform.value.checkoutInfo
      const id1 = localStorage.getItem('userData');
        const user_id = JSON.parse(this.user_id);
        const id = user_id.id;        
        const token = user_id._token;
      
        

      let forms : Observable<Checkout>;
      let data= this.checkoutService.postDetails(details, id, token);      
        this.router.navigate(['/payment']);
      
    }
   
}

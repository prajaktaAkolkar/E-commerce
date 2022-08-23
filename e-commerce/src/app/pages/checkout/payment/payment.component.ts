import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentform:any;
  success : boolean = false;
  user_id:any;
  total_ammount:any;
  constructor(
    private checkoutService: CheckoutService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.total_ammount = this.checkoutService.totalfinalAmount;
    this.user_id = localStorage.getItem('userData');
    this.paymentform = new FormGroup({    
        card_name: new FormControl(null, Validators.required),
    });

  }
  onSubmit() {
    let card_name = this.paymentform.value.card_name;
    const user_id = JSON.parse(this.user_id);
    const id = user_id.id;   
    console.log(id);
 let total_ammount:any = this.total_ammount;
 console.log(total_ammount);
 
    
   this.checkoutService.paymentMethod(card_name, id, total_ammount);  
   this.success = true;    
        this.router.navigate(['/home']);

  }


}

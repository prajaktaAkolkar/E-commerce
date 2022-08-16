import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Slider } from "src/app/model/slider.model";

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  Images :any =[];
  promo :any = [];
  allProducts :any =[];
  constructor(private http:HttpClient , private router :Router) { }

  getImages() {
    return this.http.get<Slider>("http://95.111.202.157/mangoproject/public/api/shop-banner-show");
}
// getImages() {
//     return this.Images = [
//         "https://media.istockphoto.com/id/1322157897/photo/close-up-of-a-businessman-hand-holding-a-smartphone-white-screen-is-blank-the-background-is.webp?s=612x612&w=is&k=20&c=lXI6KA8aoH3W_gpmLnq-ad6O_kKs5CziSK060YhlA5I=",
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//         "assets/img/h4-slide3.png",
//         "assets/img/h4-slide4.png",
        
//     ];
// }
getPromo(){
return this.promo = [
    {
       promo1: '30 Days return',
    
       promo2: 'Free shipping',
    
       promo3: 'Secure payments',
    
       promo4: 'New products'

    }
];
}
}

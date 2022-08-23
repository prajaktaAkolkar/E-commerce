import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    allProducts :any =[];
    userIdData :any;
	item : any;
  constructor( private productService : ProductService,
	private cartService : CartService,
	private router : Router) { }

  ngOnInit(): void {
    this.userIdData = localStorage.getItem('userData');
    console.log(this.userIdData);

    this.productService.getProducts().subscribe(res=>{
      this.allProducts = res.data;
      console.log(res);
    })

  }

  addToCart(item: any) {

	let product_id = item.id;
	let quant = (item.quantity);

	const user_id = JSON.parse(this.userIdData)
	const userId = user_id.id;
	const userToken = user_id._token;
	let quant_minus = '';

	//to add to cart 
	this.cartService.getAddToCart(userId, product_id, quant, quant_minus).subscribe(
		res => {
			this.item = res.data;
			console.log(this.item);

		});

	//to display on cart
	this.cartService.getDisplayCartItems(userId).subscribe(res => {

		this.cartService.totalItemsCount(res.data);
		this.cartService.recalculateTotalAmount(res.data);
	})
	
}

  customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		navSpeed: 300,
		navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			760: {
				items: 3
			},
			1000: {
				items: 4
			},
			1200: {
				items: 5
			}

		},
		nav: true
	}
}

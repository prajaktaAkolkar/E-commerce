import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
import { CheckoutService } from 'src/app/service/checkout/checkout.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemprice: number = 0;
	itemqty: number = 0;

	productTotalAmount: number = 0;
	products: any = [];
	allproducts: any = 0;
	productQty: any = [];
	amount: number = 899;
	cartDataList: any = [];
	data: any;
	items: any;
	total!: number;
	totalItemNumber: any;
	userIdData: any;
	productCount: any = 0;
	user_id: any;

	constructor(private cart: CartService,

		private product: ProductService,
		private router: Router,
		private route: ActivatedRoute,
		private checkoutService: CheckoutService) { }



	ngOnInit(): void {


		//to emit amount in the cart totals
		this.cart.emitAmount.subscribe(res => {
			this.productTotalAmount = res;
		})


		//to use user_id, product_id and token from localstorage
		this.userIdData = localStorage.getItem('userData');
		console.log(this.userIdData);

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		const userToken = user_id._token;


		//to get the data of all products being added
		this.cart.getProductData().subscribe(res => {

			this.products += res;
			console.log(res);

			this.products = res;
			// this.cart.getRemoveCartItem(this.products);
		});


		//for displaying items at cart page
		this.cart.getDisplayCartItems(userId).subscribe(
			res => {
				this.products = res.data;
				console.log(this.products);

			});

		//for displaying total product count in header cart
		this.cart.totalItemsCount(this.cart.productCount);

	}

	//to remove product from cart
	removeProduct(item: any) {

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;

		this.cart.getRemoveCartItem(item).subscribe(res => {
			// console.log(res);

			this.data = res.data;


			this.cart.getDisplayCartItems(userId).subscribe(
				res => {
					this.products = res.data;
					console.log(this.products);

					this.cart.recalculateTotalAmount(this.products);
					this.cart.totalItemsCount(this.products);
				});
		});

	}


	onIncrement(item: any) {

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;

		item.quant = +item.quant + 1;

		this.cart.recalculateTotalAmount(this.products);
		this.cart.totalItemsCount(this.products);

		let quant_minus = '';

		if (item.cart_id) {

			let quantity = 1;
			this.cart.getAddToCart(userId, item.id, quantity, quant_minus).subscribe(res => {
				console.log(res);

			})
		}

		this.cart.getDisplayCartItems(userId).subscribe(
			res => {
				this.products = res.data;
				console.log(this.products);

			});

	}


	onDecrement(item:any) {
		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;

		// if(this.products[index].quant - 1 <1){
		// 	this.products[index].quant =1
		// } else { 
		// 	this.products[index].quant -= 1
		// }

		if(item.quant - 1 < 1){
			item.quant = 1
		} else {
			item.quant -= 1
		}

		this.cart.recalculateTotalAmount(this.products);
		let quant_minus = 'mahak';
		// this.cart.emitAmount.next(this.productTotalAmount);

		this.cart.totalItemsCount(this.products);
		if (item.cart_id) {
			let quantity = 1;
			this.cart.getAddToCart(userId, item.id, quantity, quant_minus).subscribe(res => {
				console.log(res);


			})
		}
		
		this.cart.totalItemsCount(this.products);

	}




	onCheckout(amount: any) {
		this.checkoutService.totalfinalAmount = amount;
		//  this.router.navigate(['checkout'], {relativeTo: this.route});
		this.router.navigate(["checkout"]);

	}



}

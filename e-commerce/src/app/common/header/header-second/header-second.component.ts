import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrls: ['./header-second.component.css']
})
export class HeaderSecondComponent implements OnInit {
  products:any;
	allproducts:any;
	totalItemNumber: number = 0;
	totalAmount: any = 0;
	isAuthenticated: boolean = false;
	GrandTotal:number =0;
	total:number=0;
    cartDataList: any = [];

	private userSub: Subscription = new Subscription;
	items:any = 0;
	product: any;
	

	constructor(private authService: AuthService, private cartService: CartService) {}

	ngOnInit(): void {
		// this.cart.totalItemsCount(this.cart.productCount);
	 
		this.cartService.getProductData().subscribe(res => {
			
		});
		
		this.cartService.emitQty.subscribe(
			(res: any)=> {
	
				this.totalItemNumber = res;
			}
		);


		this.cartService.emitAmount.subscribe(
			res=>{
				this.totalAmount = res;
			}
		);
		

		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;

		});
	}


}

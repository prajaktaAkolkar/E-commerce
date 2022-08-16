import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LatestProductService} from 'src/app/service/home/latest-product.service';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
  userIdData: any;
	products: any = [];
	latestProducts: any = [];
	brands: any = [];
  constructor(private latestproduct: LatestProductService,
	
		private router: Router) { }

  ngOnInit(): void {
    this.latestproduct.getLatestProduct().subscribe(res => {
			this.latestProducts = res.data;

		})
		this.latestproduct.getBrands().subscribe(res => {
			this.brands = res.data

		})
  }

  customOptions: OwlOptions = {
   
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

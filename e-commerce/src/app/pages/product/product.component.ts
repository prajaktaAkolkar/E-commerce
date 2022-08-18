import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    allProducts :any =[];
    userIdData :any;
  constructor( private productService : ProductService) { }

  ngOnInit(): void {
    this.userIdData = localStorage.getItem('userData');
    console.log(this.userIdData);

    this.productService.getProducts().subscribe(res=>{
      this.allProducts = res.data;
      console.log(res);
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

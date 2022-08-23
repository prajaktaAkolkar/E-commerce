import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: any=[];
  quantitydetail:any=0;
isSelected:boolean = true;
isReview:boolean = false;
  constructor(private allproducts: ProductService) { }

	ngOnInit(): void {
    this.allproducts.getProducts().subscribe(res => {
      this.products = res.data; 
    })
	}

    
  isTab() {
   this.isSelected= false;
   this.isReview = true;
  }

}

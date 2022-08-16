import { Component, OnInit } from '@angular/core';
import { RecentProductService } from 'src/app/service/home/recent-product.service';
import { ProductService } from 'src/app/service/product/product.service';
@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css']
})
export class RecentProductsComponent implements OnInit {
product :any =[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.product =res.data;
      console.log(res)
    })
  }

}

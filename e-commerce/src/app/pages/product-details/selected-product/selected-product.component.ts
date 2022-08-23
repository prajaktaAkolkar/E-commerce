import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  userIdData: any;

  @Input() selectproduct: any;
  @Input() index: any;
  selectedproducts: any = [];
  detailData: any;
  // quantity='';
  reviewsData = '';
  mainImage = '';
  selectedImage = false;
  products: any = [];
  id: any = '';
  selectId = '';
  productId = '';
  quantity: any = [];
  showreviews: boolean = false;
  constructor(
    private allproducts: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartService) { }

  ngOnInit(): void {
    //to use user_id, product_id and token from localstorage
    this.userIdData = localStorage.getItem('userData');
    console.log(this.userIdData);

    const user_id = JSON.parse(this.userIdData)
    const userId = user_id.id;
    const userToken = user_id._token;


    // let id = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.allproducts.getProducts().subscribe(res => {
      this.products = res.data;
    })
    this.reviewsData

    //to display products on cart page
    this.cart.getDisplayCartItems(userId).subscribe(
      res => {
        this.products = res.data;
        console.log(this.products);

        this.cart.getRemoveCartItem(this.products);

      });

		this.cart.totalItemsCount(this.cart.productCount);


  }
  addToCart(item: any) {
    // this.cart.addToCart(item);		  
    this.router.navigate(['/cart']);

    let product_id = item.id;
    let quant = (item.quantity);

    const user_id = JSON.parse(this.userIdData)
    const userId = user_id.id;
    const userToken = user_id._token;
let quant_minus =''

    this.cart.getAddToCart(userId, product_id, quant, quant_minus).subscribe(
      res => {
        console.log(res);

        item = res.data;
        console.log(item);

      });

    this.cart.getDisplayCartItems(userId).subscribe(res => {

      this.cart.totalItemsCount(res.data);
      this.cart.recalculateTotalAmount(res.data);
    })

  }

  changeMainImg(image: any) {
    this.selectedImage = true;
    for (let product of this.products) {
      if (this.id == product.prodID) {
        this.mainImage = image;
        this.quantity = product.qty;
        console.log(this.mainImage);

      }

    }
  }
  reviews() {
    this.showreviews = true;
  }
}

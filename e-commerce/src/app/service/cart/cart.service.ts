import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, count, Observable, ReplaySubject, Subject } from "rxjs";
import { Cart } from "src/app/model/cart.model";
import { DisplayCart } from "src/app/model/display-cart.model";
import { ProductService } from "../product/product.service";

@Injectable({
    providedIn: 'root'
})

export class CartService implements OnInit {

    totalAmount: number = 0;
    cartValue: any;
    cartDataList: any = [];
    productList = new BehaviorSubject<any>([]);
    allproducts: any;
    emitAmount = new Subject<any>();
    product: any;
    item: any;
    items: any = [];
    grandTotal: any = [];
    productTotalAmount: any;
    userIdData: any = 0;
    cartQuantity = new Subject<number>();
    productCount: any = 0;
    data: any;
    emitQty = new Subject<any>();


    private cartCount = new ReplaySubject<number>(1);

    cartCount$ = this.cartCount.asObservable();
    getCartCount(): Observable<number> {
        console.log(this.cartCount.asObservable());
        
        return this.cartCount.asObservable();
    }

    setCartCount(count: number) {
        localStorage.setItem("cart_count", JSON.stringify(count));
        this.cartCount.next(count);
    }

    constructor(private products: ProductService, private http: HttpClient) { }
    ngOnInit(): void {

        this.userIdData = localStorage.getItem('userData');
        console.log(this.userIdData);

        const user_id = JSON.parse(this.userIdData)
        const userId = user_id.id;
        const userToken = user_id._token;
        
        this.products.getProducts().subscribe(res => {
            this.allproducts = res.data;
        })


        this.getDisplayCartItems(userId).subscribe(
            res => {
                this.product = res.data;
                console.log(this.product);
            });
    }

    //post api for add to cart
    getAddToCart(user_id: number, product_id: string, quant: number, quant_minus: string) {
        return this.http.post<Cart>(
            "http://95.111.202.157/mangoproject/public/api/add-to-card-ustora", {
            user_id: user_id,
            product_id: product_id,
            quant: quant,
            quant_minus: quant_minus

        }
        );
    }


    //post api for displaying cart items
    getDisplayCartItems(user_id: number) {

        return this.http.post<DisplayCart>(
            "http://95.111.202.157/mangoproject/public/api/card-display-ustora", {
            user_id: user_id,
        }
        );
    }



    //get api to remove cart item
    getRemoveCartItem(product_id: number) {
        // console.log(product_id);
        return this.http.get<Cart>(
            "http://95.111.202.157/mangoproject/public/api/cart-remove-ustora/" + product_id
        );

    }

    //get product data
    getProductData() {
        return this.productList.asObservable();
    }

    //set product data
    setProduct(product: any) {
        this.cartDataList.push(...product);
        this.productList.next(product);
        this.getTotalAmount();
    }

    //add to cart
    addToCart(product: any) {
        this.cartDataList.push(product);
        this.productList.next(this.cartDataList);

    }

    orderTotal() {

        for (let i = 0; i < this.cartDataList.length; i++) {
            this.grandTotal += this.cartDataList[i].ins;
        }
    }

    //get total amount
    getTotalAmount() {

        let grandTotal = 0;
        // return this.cartDataList.length;
        let i;
        for (i = 0; i < this.cartDataList.length; i++) {
            grandTotal += this.cartDataList[i].price;
        }
        return grandTotal;
    }

    gettotal() {
        return this.getTotalAmount();
    }


    totalItemsCount(items: any) {
        this.productCount = 0;

        console.log(items);

        const totalCount =
            items
                .filter((item: any) => {
                    // this.productCount = +this.productCount +1;

                    this.productCount = +this.productCount + +item.quant
                    // console.log(this.productCount);

                })
        console.log(this.productCount);

        this.emitQty.next(this.productCount);

    }

    recalculateTotalAmount(data: any) {

        let newTotalAmount = 0;
        data.forEach((item: { price: number; quant: number; }) => {
            newTotalAmount += (item.price * item.quant)
            // console.log(item.qty);
            this.items = item.quant;
            console.log(this.items);


        });

        this.emitAmount.next(newTotalAmount);

        return this.productTotalAmount = newTotalAmount;

    }

}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentProductService {

  products = [
    {
        category : 'Top Sellers',
        name : 'Sony Smart TV - 2015',
        img : 'assets/img/product-thumb-1.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Top Sellers',
        name : 'Apple new mac book 2015',
        img : 'assets/img/product-thumb-2.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Top Sellers',
        name : 'Apple new i phone 6',
        img : 'assets/img/product-thumb-3.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Recently_Viewed',
        name : 'Sony Smart TV - 2015',
        img : 'assets/img/product-thumb-1.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Recently Viewed',
        name : 'Apple new mac book 2015',
        img : 'assets/img/product-thumb-2.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Recently Viewed',
        name : 'Apple new i phone 6',
        img : 'assets/img/product-thumb-3.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Top New',
        name : 'Apple new i phone 6',
        img : 'assets/img/product-thumb-3.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Top New',
        name : 'Samsung gallaxy note 4',
        img : 'assets/img/product-thumb-4.jpg',
        price_ins : "400.00" ,
        price_del : "425.00"
    },
    {
        category : 'Top New',
        name : 'Sony playstation microsoft',
        img : 'assets/img/product-thumb-1.jpg',
        price_ins : "400.00",
        price_del : "425.00"
    }

]
  constructor() { }
}

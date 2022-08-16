import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brands } from 'src/app/model/brands.model';
import { LatestProduct } from 'src/app/model/latest.model';
@Injectable({
  providedIn: 'root'
})
export class LatestProductService {
  latestproduct:{} =[];
  brands: {} =[];
  constructor(private http:HttpClient) {

  }
  getBrands() {
      return this.http.get<Brands>("http://95.111.202.157/mangoproject/public/api/ustora-category");   
  }
  getLatestProduct() {
      return this.http.get<LatestProduct>("http://95.111.202.157/mangoproject/public/api/ustora-all-product");

}
}

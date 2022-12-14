import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LayoutComponent } from './common/layout/layout.component';
import { RecentlyPostComponent } from './common/layout/recently-post/recently-post.component';
import { SearchComponent } from './common/layout/search/search.component';
import { LayoutProductComponent } from './common/layout/layout-product/layout-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { HeaderFirstComponent } from './common/header/header-first/header-first.component';
import { HeaderSecondComponent } from './common/header/header-second/header-second.component';
import { HeaderThirdComponent } from './common/header/header-third/header-third.component';
import { FooterFirstComponent } from './common/footer/footer-first/footer-first.component';
import { FooterSecondComponent } from './common/footer/footer-second/footer-second.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LatestProductComponent } from './pages/home/latest-product/latest-product.component';
import { RecentProductsComponent } from './pages/home/recent-products/recent-products.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { LoadingSpinnerComponent } from './pages/register/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './service/auth/auth-interceptor.service';
import { RelatedProductComponent } from './pages/product-details/related-product/related-product.component';
import { SelectedProductComponent } from './pages/product-details/selected-product/selected-product.component';
import { MainImageComponent } from './pages/product-details/selected-product/main-image/main-image.component';
import { OrderDetilsComponent } from './pages/order/order-detils/order-detils.component';
import { PaymentComponent } from './pages/checkout/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    RecentlyPostComponent,
    SearchComponent,
    LayoutProductComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    RegisterComponent,
    OrderComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProfileComponent,
    WishlistComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    HeaderThirdComponent,
    FooterFirstComponent,
    FooterSecondComponent,
    LatestProductComponent,
    RecentProductsComponent,
    HomeSliderComponent,
    LoadingSpinnerComponent,
    RelatedProductComponent,
    SelectedProductComponent,
    MainImageComponent,
    OrderDetilsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

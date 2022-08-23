import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {path : '', redirectTo : '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent , canActivate : [AuthGuard]},
  {path : 'login' , component :RegisterComponent},
  {path :'products',component:ProductComponent},
  {
    path:'product_details/:id', 
    component: ProductDetailsComponent,
    canActivate: [AuthGuard]
  },
  {path : 'checkout',component:CheckoutComponent, canActivate :[AuthGuard]},
  {path :'cart', component:CartComponent, canActivate :[AuthGuard]},
  { path: 'orders',
 component: OrderComponent ,
 canActivate: [AuthGuard],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

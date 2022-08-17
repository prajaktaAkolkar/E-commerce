import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path : '', redirectTo : '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path : 'login' , component :RegisterComponent},
  {path :'products',component:ProductComponent},
  {path : 'checkout',component:CheckoutComponent},
  {path :'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

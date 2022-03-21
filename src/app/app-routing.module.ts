import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '' , redirectTo: 'products', pathMatch: 'full'},
  {path: 'cart' , component: CartComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'product-detail/:id' , component: ProductDetailComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

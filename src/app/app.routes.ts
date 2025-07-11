import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { ProductCreate } from './product-create/product-create';
import { ProductDetail } from './product-detail/product-detail';
import { authGuard } from './auth-guard';
import { checkoutGuard } from './checkout-guard';
import { productsResolver } from './products-resolver';

export const routes: Routes = [
    {path: "products", component: ProductList, resolve:{products: productsResolver}},
    {path: "cart", component: Cart, canActivate: [authGuard], canDeactivate: [checkoutGuard]},
    {path: "products/new", component: ProductCreate},
    {path: "products/:id", component: ProductDetail},
    {path: '', redirectTo: "products", pathMatch: "full"},
    {path: '**', redirectTo: "products"}
];

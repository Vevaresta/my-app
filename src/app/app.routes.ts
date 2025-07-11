import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { ProductCreate } from './product-create/product-create';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
    {path: "products", component: ProductList},
    {path: "cart", component: Cart},
    {path: "products/new", component: ProductCreate},
    {path: "products/:id", component: ProductDetail},
    {path: '', redirectTo: "products", pathMatch: "full"},
    {path: '**', redirectTo: "products"}
];

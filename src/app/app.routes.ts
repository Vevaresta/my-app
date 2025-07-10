import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path: "products", component: ProductList},
    {path: "cart", component: Cart}
];

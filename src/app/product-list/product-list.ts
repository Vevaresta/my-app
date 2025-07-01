import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';
import { Favorites } from '../favorites/favorites';
import { ProductView } from '../product-view/product-view';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe, Favorites, ProductView],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  //providers: [ProductsService]
})
export class ProductList implements OnInit {
  
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor(private readonly productService: ProductsService){}

  onAdded(product: Product) {
    alert(`${product.title} added to the cart`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  } 

}

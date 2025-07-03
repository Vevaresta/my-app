import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';
import { Favorites } from '../favorites/favorites';
import { ProductView } from '../product-view/product-view';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe, Favorites, ProductView, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  //providers: [ProductsService]
})
export class ProductList implements OnInit {
  
  products$: Observable<Product[]> | undefined;
  selectedProduct: Product | undefined;

  constructor(private readonly productService: ProductsService){}

  onAdded(product: Product) {
    alert(`${this.selectedProduct?.title} added to the cart`);
  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  private getProducts() {
      this.products$ = this.productService.getProducts();
    }
  }



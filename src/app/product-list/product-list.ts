import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe, AsyncPipe, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  
  products$: Observable<Product[]> | undefined;

  selectedProduct: Product | undefined;

  constructor(private productService: ProductsService) {}

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

  }
  



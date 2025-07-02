import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';
import { Favorites } from '../favorites/favorites';
import { ProductView } from '../product-view/product-view';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef = inject(DestroyRef);

  constructor(private readonly productService: ProductsService){}

  onAdded(product: Product) {
    alert(`${product.title} added to the cart`);
  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  private getProducts() {
    this.productService.getProducts().pipe(
      takeUntilDestroyed(this.destroyRef)).subscribe(products => {
      this.products = products;
    })
  }

}

import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  //providers: [ProductsService]
})
export class ProductList {
  
  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: []
  });

  selectedProduct: Product | undefined;

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

  }
  



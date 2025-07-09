import { Component, input, OnChanges, output } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnChanges{

  // Child gets value from parent in product variable
  product$: Observable<Product> | undefined;

  id = input<number>();

  // Child sends event to parent
  added = output();

  deleted = output();

  constructor(private productService: ProductsService) {}

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
    }


  addToCart() {
    this.added.emit();
  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe();
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    })
  }
}

import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnChanges{

  product = input<Product>();

  constructor(){
    console.log("Product:", this.product());
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes["product"];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log("Old value", oldValue);
      console.log("New value", newValue);

    }
  }


  added = output<Product>();

  addToCart() {
    this.added.emit(this.product()!);
  }
}

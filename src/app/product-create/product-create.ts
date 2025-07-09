import { Component } from '@angular/core';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {

  constructor(private productsService: ProductsService) {}

  createProduct(title: string, price: string, category: string) {
    this.productsService.addProduct({
      title,
      price: Number(price),
      category
    }).subscribe();
  }
}

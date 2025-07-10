import { Component } from '@angular/core';
import { ProductsService } from '../products-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {

  constructor(private productsService: ProductsService, private router: Router) {}

  createProduct(title: string, price: string, category: string) {
    this.productsService.addProduct({
      title,
      price: Number(price),
      category
    }).subscribe(() => this.router.navigate(["/products"]));
  }
}

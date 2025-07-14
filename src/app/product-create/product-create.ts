import { Component } from '@angular/core';
import { ProductsService } from '../products-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {

  constructor(private productsService: ProductsService, private router: Router) {}

  createProduct() {
    this.productsService.addProduct(this.productForm.value)
      .subscribe(() => this.router.navigate(["/products"]));
  }

  productForm = new FormGroup({
    title: new FormControl("", { nonNullable: true}),
    price: new FormControl<number | undefined>(undefined, { nonNullable: true}),
    category: new FormControl("", {nonNullable: true})
  });
}

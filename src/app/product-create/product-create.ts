import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { priceMaximumValidator } from '../price-maximum.validator';

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate implements OnInit{

  constructor(
    private productsService: ProductsService, 
    private router: Router,
    private builder: FormBuilder) {}


  productForm = new FormGroup({
    title: new FormControl("", {nonNullable: true, validators: Validators.required}),
    price: new FormControl<number | undefined>(undefined, {nonNullable: true, validators: [Validators.required, Validators.min(1), priceMaximumValidator(1000)]}),
    category: new FormControl("", {nonNullable:true})
  });


  private buildForm() {
    this.productForm = this.builder.nonNullable.group({
      title: [""],
      price: this.builder.nonNullable.control<number | undefined>(undefined),
      category: [""]
    });
  }

  
  createProduct() {
    this.productsService.addProduct(this.productForm!.value)
      .subscribe(() => this.router.navigate(["/products"]));
  }


    ngOnInit(): void {
      this.buildForm();
  }
}

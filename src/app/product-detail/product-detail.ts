import { Component, input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductsService } from '../products-service';
import { AuthService } from '../auth-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart-service';
import { PriceMaximum } from '../price-maximum';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, PriceMaximum],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit{

  // Child gets value from parent in product variable
  product$: Observable<Product> | undefined;

  id = input<string>();
  price: number | undefined;

  constructor(
    private productService: ProductsService, 
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService) {}


  ngOnInit(): void {
    this.product$ = this.productService.getProduct(Number(this.id()!));
  }

  addToCart(id: number) {
    this.cartService.addProduct(id).subscribe();
  }

  changePrice(product: Product) {
    this.productService.updateProduct(product.id, this.price!).subscribe(() => {
      this.router.navigate(["/products"]);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(["/products"]);
    })
  }
}

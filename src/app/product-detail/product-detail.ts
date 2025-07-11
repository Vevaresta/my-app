import { Component, input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products-service';
import { AuthService } from '../auth-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit{

  // Child gets value from parent in product variable
  product$: Observable<Product> | undefined;

  id = input<number>();


  constructor(
    private productService: ProductsService, 
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProduct(Number(params.get("id")));
      })
    );
  }

  addToCart() {

  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe(() => {
      this.router.navigate(["/products"]);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(["/products"]);
    })
  }
}

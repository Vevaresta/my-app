import { Component } from '@angular/core';
import { Product } from '../product';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [SortPipe, AsyncPipe, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  
  products$: Observable<Product[]> | undefined;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.productService.getProducts(Number(params.get("limit")));
      })
    );
  }

  }
  



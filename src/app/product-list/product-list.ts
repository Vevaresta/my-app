import { Component } from '@angular/core';
import { Product } from '../product';
import { SortPipe } from '../sort-pipe';
import { Observable, of, switchMap } from 'rxjs';
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
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.route.data.pipe(
      switchMap(data => of(data["products"]))
    );       
  }

  }
  



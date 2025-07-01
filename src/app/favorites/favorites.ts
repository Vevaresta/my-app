import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products-service';
import { CommonModule } from '@angular/common';
import { FavoritesService } from './favorites-service';
import { favoritesFactory } from './favoritesFactory';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  providers: [
    { provide: ProductsService, useFactory: favoritesFactory(true)}
  ]
})
export class Favorites implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductsService){}  

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}



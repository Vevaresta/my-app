import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor(private readonly productService: ProductsService){}

  onAdded(product: Product) {
    alert(`${product.title} added to the cart`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  } 

}

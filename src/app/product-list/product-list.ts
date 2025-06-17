import { AfterViewInit, Component, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements AfterViewInit {
  
  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product());
  }
  products: Product[] = [
    {id: 1, title: "Keyboard"},
    {id: 2, title: "Microphone"},
    {id: 3, title: "Web camera"},
    {id: 4, title: "Tablet"}

  ];
  selectedProduct: Product | undefined = this.products[0];

  productDetail = viewChild(ProductDetail);

  onAdded(product: Product) {
    alert(`${product.title} added to the cart`);
  }
  

}

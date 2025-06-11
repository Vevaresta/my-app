import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
// here goes all the components that I want to appear globally (on every page)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-app';
}

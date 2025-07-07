import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { Copyright } from './copyright';
import { APP_SETTINGS, appSettings, AppSettings } from './app.settings';
import { KeyLoggerComponent } from './key-logger-component/key-logger-component';

// here goes all the components that I want to appear globally (on every page)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Copyright, KeyLoggerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  
  settings = inject(APP_SETTINGS);

  currentDate = signal(new Date());
  
  
  

}





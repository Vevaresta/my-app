import { Component, computed, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { Copyright } from './copyright';
import { APP_SETTINGS, appSettings, AppSettings } from './app.settings';
import { Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger-component/key-logger-component';

// here goes all the components that I want to appear globally (on every page)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Copyright, KeyLoggerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings}
  ]
})
export class App {
  
  title: Signal<string> = signal("");

  currentDate = signal(new Date());
  
  title$ = new Observable<void>(observer => {
    setInterval(() => observer.next(), 2000);
  });
  
  settings = inject(APP_SETTINGS);
  
  constructor() {
    this.title$.subscribe(this.setTitle);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate()})`;
    });
}

private setTitle = () => {
  this.currentDate.set(new Date);
}

}

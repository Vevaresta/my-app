import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Copyright } from './copyright';
import { APP_SETTINGS } from './app.settings';
import { KeyLoggerComponent } from './key-logger-component/key-logger-component';
import { Auth } from './auth/auth';

// here goes all the components that I want to appear globally (on every page)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Copyright, KeyLoggerComponent, Auth, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  
  settings = inject(APP_SETTINGS);

  currentDate = signal(new Date());
  
}





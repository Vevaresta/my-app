import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// here goes all the components that I want to appear globally (on every page)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-app';
}

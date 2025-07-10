import { Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {

  constructor(public authService: AuthService){}

  login(){
    this.authService.login('david_r', '3478*#54').subscribe();
  }

  logout() {
    this.authService.logout();
  }

}

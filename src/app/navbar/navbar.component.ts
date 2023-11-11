import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    //console.log(this.authService.isAuthenticated());
  }
}

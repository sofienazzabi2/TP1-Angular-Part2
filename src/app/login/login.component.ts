import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor() {}
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  login(loginForm: NgForm): void {
    if (loginForm.valid) {
      const credentials = {
        email: loginForm.value.email,
        password: loginForm.value.password,
      };

      this.authService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['cv']);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: any;
  password: any;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login response
        console.log(response);
        // Navigate to the dashboard upon successful login
        this.router.navigate(['/officertable']);
      },
      (error) => {
        // Handle login error
        console.log(error);
      }
    );
  }

}

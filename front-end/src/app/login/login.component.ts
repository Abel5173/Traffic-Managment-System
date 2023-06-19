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
        
       sessionStorage.setItem('islogin', "true");
       console.log( sessionStorage.setItem('islogin', "true"))
        
        this.authService.islogin = true ;
        console.log(response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
      
        console.log(error);
      }
    );
  }

}

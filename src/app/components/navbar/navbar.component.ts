import {Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(public authSv: AuthService, public router: Router) {}

    logIn(){
        this.authSv.loginWithGoogle();
    }

    logout(){
        this.authSv.logout();
    }

    navigateToShoppingCart(){
        this.router.navigate(['shopping-cart']);
      }
}

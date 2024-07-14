import { Component } from '@angular/core';
import { AuthService } from '../../views/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(public authService:AuthService,private router:Router){}



onLogOutBtnCLick(){
  this.authService.removeToken();
  this.router.navigate(['/login'])
}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private logoutservice:LogoutService, private router: Router){}

  // logout():void{
  //   this.logoutservice.logout();
  //   this.router.navigateByUrl('/auth/login')
  // }

  logout(event: Event): void {
    event.preventDefault(); // Prevent default button click behavior
    this.logoutservice.logout();
    this.router.navigateByUrl('/auth/login');
  }
  

}

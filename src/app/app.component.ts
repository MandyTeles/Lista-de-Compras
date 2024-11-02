import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ComprasComponent } from './components/compras/compras.component';
import { CommonModule } from '@angular/common';
import { AuthService, User} from '@auth0/auth0-angular';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainPageComponent } from './components/main-page/main-page.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,ComprasComponent,RouterLink,CommonModule,NavbarComponent,ProfileComponent,MainPageComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-compras';
  profile?:User| undefined |null ;
}

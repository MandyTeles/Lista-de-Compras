import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ComprasComponent } from '../compras/compras.component';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent,ComprasComponent,CommonModule,AsyncPipe],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(public auth: AuthService){}
}

import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuardFn } from '@auth0/auth0-angular';


export const routes: Routes = [
    {path:'profile',component:ProfileComponent, canActivate:[authGuardFn]},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Composant Login
import { RegisterComponent } from './register/register.component';  // Composant Register
import { LoginComponent } from './login/login.component';  // Composant Login
import { ShipsWikiComponent } from './ships-wiki/ships-wiki.component';  // Composant Login
export const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },  // Composant Register
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'wikiShips', component: ShipsWikiComponent },  
  
];

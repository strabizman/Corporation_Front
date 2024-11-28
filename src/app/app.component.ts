import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],  // Importer RouterOutlet pour gérer l'affichage des composants en fonction des routes
  template: `
    <app-navbar></app-navbar>
    <nav>
      <a routerLink="/"></a>
      <a routerLink="/register"></a>
      <a routerLink="/login"></a>
      <a routerLink="/home"></a>
      <a routerLink="/wikiShips"></a>
    </nav>
    <router-outlet></router-outlet>  <!-- Important pour afficher les pages -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MonApplication';
}

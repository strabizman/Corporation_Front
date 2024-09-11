import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Importer RouterOutlet pour gérer l'affichage des composants en fonction des routes
  template: `
    <nav>
      <a routerLink="/">Accueil</a>
      <a routerLink="/register">Inscription</a>
    </nav>
    <router-outlet></router-outlet>  <!-- Important pour afficher les pages -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonApplication';
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  private apiUrl = 'http://localhost:3000/ships'; // Chemin de l'API JSON Server

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les vaisseaux.
   */
  getShips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Récupère un vaisseau par son nom.
   * @param name Nom du vaisseau
   */
  getShipByName(name: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?name=${name}`);
  }
}


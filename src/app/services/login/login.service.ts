import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/users'; // Ton API JSON Server

  constructor(private http: HttpClient) {}

  // Inscription d'un nouvel utilisateur
  register(user: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user).pipe(
      catchError(this.handleError)
    );
  }

  // Connexion d'un utilisateur existant
  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour gérer les erreurs
  private handleError(error: any): Observable<never> {
    console.error('Une erreur est survenue:', error);
    throw error; // Tu peux aussi gérer cette erreur de manière plus spécifique
  }
}

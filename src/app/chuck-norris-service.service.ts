import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisServiceService {
  private apiUrl = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }

  obtenerBromaAleatoria(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  obtenerCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  buscarBromas(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?query=${query}`);
  }
}

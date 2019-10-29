import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly http: HttpClient
  ) { }

  fetchPokemons(): Observable<any> {
    return this.http.get('/pokemon');
  }

}

import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(public http: HttpClient) { }

  public url: String = "https://pokeapi.co/api/v2";

  async getPokemonsDetails(name){
    var endpoint = this.url + "/pokemon";
    return await this.http.get(endpoint + `/${name}`).toPromise();
  }

  async getTypes()  {
    var endpoint = this.url + "/type";
    return await this.http.get(endpoint).toPromise();
  }

  getPokemonsByType(url)  {
    return this.http.get(url).toPromise();
  }
}
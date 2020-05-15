import { PokeApiService } from './../services/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public types: any;
  public selectTypes;
  public pokemonsByType;
  public pokemonsDetails: Array<any>;
  public myPokemons;

  constructor(private pokeapi: PokeApiService) { }

  async ngOnInit(): Promise<void> {
    this.types = await this.getTypes();
    this.myPokemons = this.getMyPokemons();
  }

  getMyPokemons(){
    let pokemonsAlmacenados = JSON.parse(localStorage.getItem("myPokemons"));
    return pokemonsAlmacenados ? pokemonsAlmacenados : [];
  }

  //Obtenemos los tipos de pokemon
  async getTypes(){
    const response: any = await this.pokeapi.getTypes();
    return response.results;
  }

  //Obtenemos los pokemon del tipo seleccionado
  async getPokemonsByType(url){
    const response: any = await this.pokeapi.getPokemonsByType(url);
    this.pokemonsDetails = await this.fillPokemonsArray(response.pokemon)
  }

  //Obtenemos los detalles del pokemon pasdo en parametro
  async getPokemonsDetails(name){
    return await this.pokeapi.getPokemonsDetails(name);
  }

  //Rellenamos el array con la información de cada pokemon del tipo seleccionado
  fillPokemonsArray(pokemonsByType){
    let arrayPokemonsByType = [];
    pokemonsByType.forEach(async item => {
      arrayPokemonsByType.push(await this.getPokemonsDetails(item.pokemon.name))
    });    
    return arrayPokemonsByType
  }

}

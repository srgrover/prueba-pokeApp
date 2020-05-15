import { Pokemon } from './../Models/pokemon';
import { PokeApiService } from './../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public pokeForm: FormGroup;
  public myPokemons;
  public types;
  
  constructor(private pokeApi: PokeApiService) {
    this.pokeForm = new FormGroup({
      'name': new FormControl(),
      'weight': new FormControl(),
      'type': new FormControl(),
      'image': new FormControl()
    });
  }

  ngOnInit(): void {
    let pokemonsAlmacenados = JSON.parse(localStorage.getItem("myPokemons"));
    this.myPokemons = pokemonsAlmacenados ? pokemonsAlmacenados : [];
    this.getTypes();
  }

  guardarCambios() {
    const pokemon: Pokemon = this.pokeForm.value;
    this.myPokemons.push(pokemon);
    localStorage.setItem("myPokemons", JSON.stringify(this.myPokemons));
    this.resetForm(this.pokeForm);
  }

  resetForm(pokeForm){
    pokeForm.reset();
  }

  async getTypes(){
    const response: any = await this.pokeApi.getTypes();
    this.types = response.results;
  }
}

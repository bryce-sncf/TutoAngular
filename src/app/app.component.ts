import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonID: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonID)
    if (pokemon){
      console.log(`Vous avez selectionné ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else {
    console.log(`Le pokemon n'existe pas`);
    this.pokemonSelected = pokemon;
    }
  }
}

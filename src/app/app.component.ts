import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLButtonElement).value;
    console.log(`Vous avez selectionné ${this.pokemonList[index].name} !`);
  }
}

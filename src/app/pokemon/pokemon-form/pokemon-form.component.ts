import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit{
  @Input()
  pokemon!: Pokemon;
  types!: string[];

  constructor(
    private pokemonService: PokemonService,
    private router : Router
  ) { }

  ngOnInit(): void 
  {
    this.types = this.pokemonService.getPokemonTypeList();
  }

hasType(type: string): boolean
{
return this.pokemon?.types?.includes(type)||false ;
}

selectType($events: Event, type: string): void
{
 const isChecked: boolean = ($events.target as HTMLInputElement).checked;
 if(isChecked)
 {
   this.pokemon.types.push(type);
}else
{
  const index = this.pokemon.types.indexOf(type);
  this.pokemon.types.splice(index, 1)
}
}

isTypesValid(type: string): boolean
{
if (this.pokemon.types.length === 1 && this.hasType(type))
{
return false;
} else if (this.pokemon.types.length > 2 && !this.hasType(type))
{
return false;
}
return true
}

onSubmit()
{
  this.pokemonService.updatePokemon(this.pokemon)
  .subscribe(() => 
  {
      this.router.navigate(['/pokemons', this.pokemon.id])
  })
  }
}

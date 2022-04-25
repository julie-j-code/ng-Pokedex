import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

// @Injectable({providedIn: 'root'})
// Suppression de l'injecteur racine qui implique de fournir le service depuis le provider du module
@Injectable()
export class PokemonService {

  getPokemonList():Pokemon[]{
    return POKEMONS
  }

  getPokemonById(pokemonId:number):Pokemon|undefined{
   return POKEMONS.find(pokemon=>pokemon.id==pokemonId)
  }

  getPokemonTypeList():string[]{
    return ['Plante','Feu','Insecte','Fée', 'Vol','Plante','Combat','Psy' ]
  }

  constructor() { }
}

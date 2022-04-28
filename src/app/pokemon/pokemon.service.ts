import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
// import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

// @Injectable({providedIn: 'root'})
// Suppression de l'injecteur racine qui implique de fournir le service depuis le provider du module
@Injectable()
export class PokemonService {

  constructor(private Http:HttpClient){}

  getPokemonList():Observable<Pokemon[]>{
    // return POKEMONS
    return this.Http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList)=>console.table(pokemonList)),
      catchError((error)=>{
        console.log(error);
        return of([])
      })
    )
  }

  getPokemonById(pokemonId:number):Observable<Pokemon|undefined>{
      //  return POKEMONS.find(pokemon=>pokemon.id==pokemonId)
    return this.Http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
    tap((pokemon)=>console.log(pokemon)),
    catchError((error)=>{
      console.log(error);
      return of(undefined)
    })
  )
}

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte',
      'Normal',
      'Electrik', 
      'Poison', 
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }


}

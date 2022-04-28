import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
  pokemon?:Pokemon;
    
  constructor(private route:ActivatedRoute, private router:Router, private service:PokemonService) {

   }

  ngOnInit(): void {
    const pokemonId:string|null=this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.service.getPokemonById(+pokemonId).subscribe(pokemon=>this.pokemon=pokemon)
      // this.pokemon=this.service.getPokemonById(+pokemonId)
    }
  }

  backToList(){
    this.router.navigate(['/pokemons'])
  }

  goToEdit(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']

})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string [];

  constructor(private service:PokemonService, private router:Router) { }

  ngOnInit(){
    this.types=this.service.getPokemonTypeList()
  }

  // le type actif
  hasType(type:string):boolean{
    return this.pokemon.types.includes(type)
  }

  selectType($event:Event, type:string){
    const isChecked=($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type)
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1)
      this.router.navigate(['/pokemon',this.pokemon.id])
    }
  }

  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit(){
    this.service.updatePokemon(this.pokemon).subscribe(
      // etant donné que le truc pour simuler l'appel à l'API renvoie null lors du put, on ne peut va pas gérer le cas d'erreurs
      // sauf que normalement, faudrait :
      // (pokemon)=>{
      //   if (pokemon) {          
      //     this.router.navigate(['/pokemon', this.pokemon.id])
      //   }
      // }

      ()=>this.router.navigate(['/pokemon', this.pokemon.id])
    )

  }

}

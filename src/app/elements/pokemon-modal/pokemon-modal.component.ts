import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResultAbility } from 'src/app/interfaces/ability-list.interface';
import { pokemonDetailInterface } from 'src/app/interfaces/pokemon-detail.interface';
import { DetalhesHabilidadeComponent } from '../detalhes-habilidade/detalhes-habilidade.component';


@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})

export class PokemonModalComponent {

  pokemonDetail!: pokemonDetailInterface;
  ability!:ResultAbility
 

  @Input()
   selectedPokemon: any;
   poke: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http:HttpClient){};

  public ngOnInit():void{
    console.log(this.data)

    this.http.get<pokemonDetailInterface>(this.data.url).subscribe(results => {
      this.pokemonDetail = results;
    })
   
 
  }

  closeModal() {
    this.selectedPokemon = null;
  }

  
}

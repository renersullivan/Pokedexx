import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonModalComponent } from 'src/app/elements/pokemon-modal/pokemon-modal.component';


export type listResults = Pokemon[]

export interface Pokemon {
imageURL: any |undefined;
  name: string
  url: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  selectedPokemon: any;

  openModal(pokemon: any) {
    this.dialog.open(PokemonModalComponent,{data:pokemon})
    this.selectedPokemon = pokemon;
    console.log('abriu aki')
  }
  

  pokemon:[] | undefined
  public results!:listResults
 modal: any;

  constructor(private http:HttpClient,public dialog: MatDialog
    ){

  }

 public ngOnInit():void{
  this.buscaPokemons()
 
  }

  public buscaPokemons(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').subscribe(data => {
      this.results = data.results.map((pokemon: any) => {
        const pokemonId = this.extractIdFromUrl(pokemon.url); // Extrai o ID do Pokémon da URL
        pokemon.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
        return pokemon;
      });
      console.log(this.results);
    });
  }
  
  private extractIdFromUrl(url: string): number {
    const parts = url.split('/').filter(part => part.trim() !== '');
    return parseInt(parts[parts.length - 1], 10);
  }
  
  public clickBuscaPokemonDetalhe():void{
   
    }

  }






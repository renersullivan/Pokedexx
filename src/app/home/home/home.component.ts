import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type listResults = Pokemon[]

export interface Pokemon {
  name: string
  url: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public results!:listResults

  constructor(private http:HttpClient){

  }

 public ngOnInit():void{
  this.buscaPokemons()

  }

  public buscaPokemons():void{
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(data=>{
      this.results = data.results
      console.log(data.results)
    })

  }

  public clickBuscaPokemonDetalhe(poke:Pokemon):void{
   
    }

  }




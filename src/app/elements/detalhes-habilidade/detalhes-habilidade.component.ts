import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EffectEntry, EffectRootResponse, ResultAbility } from 'src/app/interfaces/ability-list.interface';
import { Pessoa, pokemonDetailInterface } from 'src/app/interfaces/pokemon-detail.interface';

@Component({
  selector: 'app-detalhes-habilidade',
  templateUrl: './detalhes-habilidade.component.html',
  styleUrls: ['./detalhes-habilidade.component.css']
})

export class DetalhesHabilidadeComponent {
 
  @Input() 
  url!: string;
  efeitos!:EffectEntry[]





  constructor(private http:HttpClient){};

  public ngOnInit():void{
    

 
    this.http.get<EffectRootResponse>(this.url).subscribe(result =>{

      this.efeitos = result.effect_entries.filter(effect => effect.language?.name === "en") as [  ]
      
   })
  }


  
  
}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonModalComponent } from './elements/pokemon-modal/pokemon-modal.component';
import { DetalhesHabilidadeComponent } from './elements/detalhes-habilidade/detalhes-habilidade.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalhesHabilidadeComponent,
    HomeComponent,
    PokemonModalComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [DetalhesHabilidadeComponent],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

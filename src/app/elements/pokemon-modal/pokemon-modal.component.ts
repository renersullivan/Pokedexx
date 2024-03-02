import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent {
  @Input() selectedPokemon: any;
poke: any;

  closeModal() {
    this.selectedPokemon = null;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.css']
})
export class ModalDetalhesComponent {

  @Input() pokemon: any;

  constructor() { }
}


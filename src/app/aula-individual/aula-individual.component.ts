import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aula-individual',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aula-individual.component.html',
  styleUrls: ['./aula-individual.component.css']
})
export class AulaIndividualComponent {
  steps = [
    'Aula de 1h comigo',
    'Diagnóstico do seu jogo',
    'Cronograma de estudos personalizado',
    'Direcionamento para sua rotina',
  ];
}

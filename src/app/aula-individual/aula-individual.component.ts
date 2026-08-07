import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface AulaStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-aula-individual',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aula-individual.component.html',
  styleUrls: ['./aula-individual.component.css']
})
export class AulaIndividualComponent {
  readonly steps: readonly AulaStep[] = [
    {
      number: '1',
      title: 'Entender seu momento',
      description: 'Conversar sobre sua rotina, seus objetivos e as dúvidas que mais aparecem no seu estudo.'
    },
    {
      number: '2',
      title: 'Analisar seu jogo',
      description: 'Observar padrões, decisões e pontos que merecem mais atenção.'
    },
    {
      number: '3',
      title: 'Definir prioridades',
      description: 'Escolher o que faz mais sentido trabalhar agora, sem tentar resolver tudo de uma vez.'
    },
    {
      number: '4',
      title: 'Sair com direção',
      description: 'Organizar um caminho de estudo possível para você continuar depois da aula.'
    }
  ];
}

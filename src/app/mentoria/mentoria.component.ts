import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mentoria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mentoria.component.html',
  styleUrls: ['./mentoria.component.css']
})
export class MentoriaComponent {
  highlights = [
    '1h30 de aula por semana',
    'Grupo exclusivo no WhatsApp',
    'Cronograma de estudos individual',
    'Acompanhamento para seu nível e objetivo',
  ];

  plans = [
    {
      title: 'Plano mensal',
      text: 'Ideal para quem quer começar com acompanhamento próximo e rotina bem definida.',
      link: '#contato',
    },
    {
      title: 'Plano semestral',
      text: 'Melhor para quem quer constância, evolução mais profunda e um plano de longo prazo.',
      link: '#contato',
    },
  ];
}

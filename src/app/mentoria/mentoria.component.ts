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
    'Diagnóstico individual de 15 minutos.',
    'Cronograma personalizado.',
    'Aulas ao vivo semanais de 1h30.',
    'Laboratório de exercícios.',
    'Grupo exclusivo no WhatsApp.',
  ];

  plans = [
    {
      title: 'Plano mensal',
      price: 'R$ 280/mês',
      text: 'Para começar com acompanhamento próximo.',
      link: 'https://pay.kiwify.com.br/HrTQS6u',
    },
    {
      title: 'Plano semestral',
      price: 'R$ 240/mês no semestral',
      text: 'Melhor custo para evolução contínua.',
      link: 'https://pay.kiwify.com.br/SPymlHQ',
    },
  ];

  supportImages = [
    {
      src: 'assets/images/cronograma.png',
      alt: 'Exemplo de cronograma da mentoria',
      caption: 'Exemplo de cronograma.',
    },
    {
      src: 'assets/images/plataforma.png',
      alt: 'Exemplo da plataforma da mentoria',
      caption: 'Exemplo da plataforma.',
    },
  ];
}

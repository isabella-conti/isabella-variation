import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos-avulsos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos-avulsos.component.html',
  styleUrls: ['./cursos-avulsos.component.css']
})
export class CursosAvulsosComponent {
  courses = [
    {
      title: 'Estratégias com base no livro do Seirawan',
      text: 'Um curso para entender planos, peças e decisões estratégicas com mais clareza.',
    },
    {
      title: 'Gambito da Dama Aceito com MN Conti',
      text: 'Abertura explicada de forma prática, com ideias principais e planos típicos.',
    },
    {
      title: 'Ebook de análise de partidas',
      text: 'Material direto para estudar suas partidas e transformar erro em aprendizado.',
    },
    {
      title: '5 segredos para evoluir no xadrez',
      text: 'Conteúdo curto e objetivo para acelerar sua evolução com estudo mais inteligente.',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CourseItem {
  id: string;
  kicker: string;
  title: string;
  benefit: string;
  fit: string;
  cta: string;
  link: string;
}

@Component({
  selector: 'app-cursos-avulsos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos-avulsos.component.html',
  styleUrls: ['./cursos-avulsos.component.css']
})
export class CursosAvulsosComponent {
  readonly courses: readonly CourseItem[] = [
    {
      id: 'estrategias-seirawan',
      kicker: 'Estratégia',
      title: 'Estratégias com base no livro do Seirawan',
      benefit: 'Para entender como planos, peças e decisões se conectam em posições estratégicas.',
      fit: 'Quer ler melhor a posição antes de escolher um plano.',
      cta: 'Estudar estratégias',
      link: 'https://pay.kiwify.com.br/TFX8bpV'
    },
    {
      id: 'gambito-dama-aceito',
      kicker: 'Abertura',
      title: 'Gambito da Dama Aceito com MN Conti',
      benefit: 'Uma leitura prática do Gambito da Dama Aceito, com ideias centrais e planos típicos para guiar suas decisões.',
      fit: 'Quer estudar a abertura além de decorar lances.',
      cta: 'Estudar o Gambito da Dama',
      link: 'https://pay.kiwify.com.br/gTK6vfU'
    },
    {
      id: 'ebook-analise-partidas',
      kicker: 'Análise',
      title: 'Ebook de análise de partidas',
      benefit: 'Um material para revisar suas partidas, reconhecer padrões e transformar erros em perguntas melhores.',
      fit: 'Quer aprender com o próprio jogo.',
      cta: 'Ver o ebook',
      link: 'https://pay.kiwify.com.br/19ydgQG'
    },
    {
      id: 'cinco-segredos-xadrez',
      kicker: 'Treino',
      title: '5 segredos para evoluir no xadrez',
      benefit: 'Um conteúdo enxuto para repensar sua rotina e estudar com mais intenção.',
      fit: 'Quer encontrar ajustes no jeito de treinar.',
      cta: 'Conhecer o conteúdo',
      link: 'https://pay.kiwify.com.br/TBjMKxi'
    }
  ];
}

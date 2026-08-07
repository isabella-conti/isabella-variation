import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroIcons = [
    {
      src: 'assets/images/trofeu.png',
      alt: 'Troféu',
      className: 'hero-icon hero-icon-a',
    },
    {
      src: 'assets/images/discoball.png',
      alt: 'Bola de espelhos',
      className: 'hero-icon hero-icon-center',
    },
    {
      src: 'assets/images/foguete.png',
      alt: 'Foguete',
      className: 'hero-icon hero-icon-b',
    },
    {
      src: 'assets/images/rei.png',
      alt: 'Peça rei',
      className: 'hero-icon hero-icon-c',
    },
  ];

  offers = [
    {
      title: 'Mentoria de xadrez',
      summary: 'Aulas em grupo, apoio individual e cronograma feito para você.',
      link: '/mentoria',
      image: 'assets/images/trofeu.png',
      label: 'Mais popular',
      tone: 'offer-yellow',
    },
    {
      title: 'Aula individual',
      summary: 'Aulas 1 a 1 com cronograma de estudos dedicado ao seu jogo e metas.',
      link: '/aula-individual',
      image: 'assets/images/rei.png',
      label: 'Personalizado',
      tone: 'offer-red',
    },
    {
      title: 'Cursos gravados',
      summary: 'Acesso vitalício a cursos de abertura, tática e finais. Estude quando e onde quiser.',
      link: '/cursos-gravados',
      image: 'assets/images/seguralampada.png',
      label: 'No seu ritmo',
      tone: 'offer-cream',
    },
  ];

  resources = [
    {
      title: 'Estratégias',
      subtitle: 'Planos, ideias e decisões.',
      image: 'assets/images/bispo.png',
    },
    {
      title: 'Bônus',
      subtitle: 'Materiais extras e apoio.',
      image: 'assets/images/presente.png',
    },
    {
      title: 'Artigos',
      subtitle: 'Leituras curtas para estudo.',
      image: 'assets/images/seguralampada.png',
    },
    {
      title: 'Desafios',
      subtitle: 'Exercícios para fixar conteúdo.',
      image: 'assets/images/gatosupreso.png',
    },
  ];

  footerLinks = ['Mentoria de Xadrez', 'Aula Individual', 'Cursos Gravados'];

}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface AulaStep {
  number: string;
  title: string;
  description: string;
}

interface SupportImage {
  src: string;
  alt: string;
  caption: string;
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

  supportImages: SupportImage[] = [
    {
      src: 'assets/images/cronograma.png',
      alt: 'Exemplo de cronograma de estudos',
      caption: 'Exemplo de cronograma de estudos.'
    }
  ];

  isModalOpen = false;
  selectedImage: SupportImage | null = null;

  openModal(image: SupportImage): void {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }

  // Permite fechar o modal ao pressionar a tecla ESC
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
}
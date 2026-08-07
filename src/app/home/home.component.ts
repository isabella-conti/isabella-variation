import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TrainingPath {
  id: string;
  title: string;
  summary: string;
  fit: string;
  cta: string;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly trainingPaths: readonly TrainingPath[] = [
    {
      id: 'mentoria',
      title: 'Mentoria de xadrez em turma',
      summary: 'Treino guiado com rotina, acompanhamento e um plano para você continuar evoluindo com consistência.',
      fit: 'Quer estudar com uma direção contínua e ter apoio.',
      cta: 'Conhecer a mentoria',
      route: '/mentoria'
    },
    {
      id: 'aula-individual',
      title: 'Aula individual',
      summary: 'Uma aula de 1 hora para treinar e analisar seu momento, organizar prioridades e definir próximos passos possíveis.',
      fit: 'Sente que está estudando sem saber o que priorizar agora.',
      cta: 'Organizar uma aula',
      route: '/aula-individual'
    },
    {
      id: 'cursos-gravados',
      title: 'Cursos gravados',
      summary: 'Materiais diretos para aprofundar um tema específico sem depender de uma agenda fixa.',
      fit: 'Quer escolher um assunto e estudar no horário que fizer sentido para você.',
      cta: 'Explorar cursos',
      route: '/cursos-gravados'
    }
  ];
}

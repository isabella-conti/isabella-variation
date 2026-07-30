import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  youtubeChannel = 'https://www.youtube.com/@MNConti';

  skills = [
    'Mentoria de xadrez em turma',
    'Aulas individuais',
    'Cursos gravados',
    'Cronograma personalizado',
    'Acompanhamento estratégico',
    'Estudo com clareza',
  ];
}

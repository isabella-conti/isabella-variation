import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
posts = [
  { title: 'Back training chess after 1 year', excerpt: 'Chess studying can sometimes be frustrating', slug: 'back-to-training' },
  { title: 'My First Week with Angular', excerpt: 'What I learned combining chess and frontend dev.', slug: 'chess-week-1' },
  { title: 'Using AI to Train Like a Grandmaster', excerpt: 'My journey into personalized chess training with AI.', slug: 'ai-chess-train' }
];

}

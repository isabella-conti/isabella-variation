import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts = [
    { title: 'Why Chess Makes You Smarter', excerpt: 'Exploring how chess shapes logical thinking.', slug: 'back-to-training' },
    { title: 'My First Week with Angular', excerpt: 'What I learned combining chess and frontend dev.', slug: 'chess-week-1' },
    { title: 'Using AI to Train Like a Grandmaster', excerpt: 'My journey into personalized chess training with AI.', slug: 'ai-chess-train' }
  ];
}

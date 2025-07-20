// src/app/home/home.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsService, BlogPost } from '../services/posts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private postsService = inject(PostsService);
  posts: BlogPost[] = [];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 3);
    });
  }
}

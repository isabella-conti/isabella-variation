import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsService, BlogPost } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private postsService = inject(PostsService);
  posts: BlogPost[] = [];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data
        .sort((a, b) => b.index - a.index)
    });
  }

}

// src/app/services/posts.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);
  private postsUrl = 'assets/mocks/posts.mock.json'; // ou onde você quiser armazenar

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.postsUrl);
  }

  getPostBySlug(slug: string): Observable<BlogPost | undefined> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.slug === slug))
    );
  }
}

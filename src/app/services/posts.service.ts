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
  private postsUrl = 'assets/mocks/posts.mock.json';

  getPosts(): Observable<(BlogPost & { index: number })[]> {
    return this.http.get<BlogPost[]>(this.postsUrl).pipe(
      map(posts =>
        posts.map((post, index) => ({
          ...post,
          index
        }))
      )
    );
  }

  getPostBySlug(slug: string): Observable<(BlogPost & { index: number }) | undefined> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.slug === slug))
    );
  }


}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService, BlogPost } from '../services/posts.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService);
  private sanitizer = inject(DomSanitizer);

  post: (BlogPost & { index: number }) | undefined;
  previousPost: BlogPost | null = null;
  nextPost: BlogPost | null = null;

  safeContent: SafeHtml = '';

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug') || '';
        return this.postService.getPosts().pipe(
          switchMap(posts => {
            const current = posts.find(p => p.slug === slug);
            if (current) {
              this.post = current;
              this.safeContent = this.sanitizer.bypassSecurityTrustHtml(current.content);
              const index = current.index;
              this.previousPost = posts[index - 1] || null;
              this.nextPost = posts[index + 1] || null;
            }
            return [];
          })
        );
      })
    ).subscribe();
  }

}

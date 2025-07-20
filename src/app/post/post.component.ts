import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService, BlogPost } from '../services/posts.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService);
  private sanitizer = inject(DomSanitizer);

  post: BlogPost | undefined;
  safeContent: SafeHtml = '';

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug') || '';
        return this.postService.getPostBySlug(slug);
      })
    ).subscribe(post => {
      if (post) {
        this.post = post;
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
      }
    });
  }
}

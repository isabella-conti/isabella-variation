import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  styleUrls: ['./app.component.css'], // ← CORRETO AGORA
  template: `
    <main>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'blog-isa';
}

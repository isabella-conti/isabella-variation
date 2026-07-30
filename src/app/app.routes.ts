import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { MentoriaComponent } from './mentoria/mentoria.component';
import { AulaIndividualComponent } from './aula-individual/aula-individual.component';
import { CursosAvulsosComponent } from './cursos-avulsos/cursos-avulsos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentoria', component: MentoriaComponent },
  { path: 'aula-individual', component: AulaIndividualComponent },
  { path: 'cursos-gravados', component: CursosAvulsosComponent },
  { path: 'cursos-avulsos', redirectTo: 'cursos-gravados', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:slug', component: PostComponent },
  { path: 'about', component: AboutComponent}
];

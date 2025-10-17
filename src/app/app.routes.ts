import { Routes } from '@angular/router';
import { PostsComponent } from './features/posts/posts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: '**', redirectTo: 'posts' }
];

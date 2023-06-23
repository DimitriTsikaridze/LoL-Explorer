import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'champions',
    loadChildren: () => import('./features/champions/champions.routes'),
    title: 'Champions',
  },
  {
    path: 'not-found',
    loadComponent: () => import('./features/error/error.component'),
    title: 'Page not found',
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

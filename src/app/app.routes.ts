import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
    title: 'Home',
  },
  {
    path: 'champions',
    loadChildren: () => import('./features/champions/champions.routes'),
    title: 'Champions',
  },

  {
    path: 'search-summoner',
    loadComponent: () =>
      import(
        './features/search-summoner/search-summoner/search-summoner.component'
      ),
    title: 'Search Summoner',
  },
  {
    path: 'champion-rotations',
    loadComponent: () =>
      import('./features/champion-rotations/champion-rotations.component'),
    title: 'Champion Rotationns',
  },
  {
    path: 'not-found',
    loadComponent: () => import('./features/error/error.component'),
    title: 'Page not found',
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

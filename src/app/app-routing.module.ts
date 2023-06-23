import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    title: 'Home',
  },
  {
    path: 'champions',
    loadChildren: () =>
      import('./features/champions/champions.module').then(
        (m) => m.ChampionsModule
      ),
    title: 'Champions',
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./features/error/error.module').then((m) => m.ErrorModule),
    title: 'Page not found',
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

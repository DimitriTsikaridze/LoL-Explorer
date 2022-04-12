import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './features/error/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'search-summoner',
    loadChildren: () =>
      import('./features/search-summoner/search-summoner.module').then(
        (m) => m.SearchSummonerModule
      ),
  },
  {
    path: 'champions',
    loadChildren: () =>
      import('./features/champions/champions.module').then(
        (m) => m.ChampionsModule
      ),
  },
  {
    path: 'champion-rotations',
    loadChildren: () =>
      import('./features/champion-rotations/champion-rotations.module').then(
        (m) => m.ChampionRotationsModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./features/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

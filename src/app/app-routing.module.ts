import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './components/search-summoner/search-summoner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search-summoner', component: SearchSummonerComponent },
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
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

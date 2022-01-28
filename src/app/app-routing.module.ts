import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionRotationsComponent } from './components/champion-rotations/champion-rotations.component';
import { ChampionDetailsComponent } from './components/champions/champion-details/champion-details.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './components/search-summoner/search-summoner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search-summoner', component: SearchSummonerComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champions/:id', component: ChampionDetailsComponent },
  { path: 'champion-rotations', component: ChampionRotationsComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

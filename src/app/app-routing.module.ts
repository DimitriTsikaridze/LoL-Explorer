import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailsComponent } from './components/champions/champion-details/champion-details.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './components/search-summoner/search-summoner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search-summoner', component: SearchSummonerComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champions/:id', component: ChampionDetailsComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

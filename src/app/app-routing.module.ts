import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailsComponent } from './components/champions/champion-details/champion-details.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './search-summoner/search-summoner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-summoner', component: SearchSummonerComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champions/:id', component: ChampionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionsComponent } from './champions/champions.component';

const routes = [
  { path: '', component: ChampionsComponent },
  { path: ':id', component: ChampionDetailsComponent },
] as Routes;

export default routes;

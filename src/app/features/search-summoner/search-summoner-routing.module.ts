import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSummonerComponent } from './search-summoner/search-summoner.component';

const routes: Routes = [
  {
    path: '',
    component: SearchSummonerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchSummonerRoutingModule {}

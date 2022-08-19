import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSummonerComponent } from './search-summoner/search-summoner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent, TitleComponent } from '@shared/index';

const routes: Routes = [
  {
    path: '',
    component: SearchSummonerComponent,
  },
];

@NgModule({
  declarations: [SearchSummonerComponent, SearchBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    ReactiveFormsModule,
    TitleComponent,
    LoadingComponent,
  ],
})
export class SearchSummonerModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSummonerComponent } from './search-summoner/search-summoner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from '../../shared/components/title/title.component';

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
  ],
})
export class SearchSummonerModule {}

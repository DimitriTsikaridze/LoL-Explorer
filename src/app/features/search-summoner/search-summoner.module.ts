import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSummonerComponent } from './search-summoner/search-summoner.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

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
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class SearchSummonerModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSummonerRoutingModule } from './search-summoner-routing.module';
import { SearchSummonerComponent } from './search-summoner/search-summoner.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SearchSummonerComponent, SearchBarComponent],
  imports: [
    CommonModule,
    SearchSummonerRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class SearchSummonerModule {}

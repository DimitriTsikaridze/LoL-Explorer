import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { SingleChampionComponent } from './single-champion/single-champion.component';
import { ChampionsComponent } from './champions.component';
import { SkinPreviewComponent } from './champion-details/skin-preview/skin-preview.component';
import { SkinsComponent } from './champion-details/skins/skins.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ChampionDetailsComponent,
    SingleChampionComponent,
    ChampionsComponent,
    SkinPreviewComponent,
    SkinsComponent,
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    NgxPaginationModule,
    SharedModule,
  ],
})
export class ChampionsModule {}

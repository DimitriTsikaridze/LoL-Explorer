import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { SingleChampionComponent } from './single-champion/single-champion.component';
import { ChampionsComponent } from './champions/champions.component';
import { SkinPreviewComponent } from './champion-details/skin-preview/skin-preview.component';
import { SkinsComponent } from './champion-details/skins/skins.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChampionsComponent },
  { path: ':id', component: ChampionDetailsComponent },
];
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
    RouterModule.forChild(routes),
    NgxPaginationModule,
    MatDialogModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class ChampionsModule {}

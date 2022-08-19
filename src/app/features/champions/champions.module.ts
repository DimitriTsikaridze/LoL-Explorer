import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ChampionDetailsComponent,
  SingleChampionComponent,
  ChampionsComponent,
  SkinPreviewComponent,
  SkinsComponent,
} from './index';

import { NgxPaginationModule } from 'ngx-pagination';

import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { ShortTextPipe } from '@shared/pipes';
import { TitleComponent, LoadingComponent } from '@shared/components';

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
    FontAwesomeModule,
    ShortTextPipe,
    TitleComponent,
    LoadingComponent,
  ],
})
export class ChampionsModule {}

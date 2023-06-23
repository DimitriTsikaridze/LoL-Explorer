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
import { RouterModule, Routes } from '@angular/router';

import { ShortTextPipe } from '@shared/pipes';
import { TitleComponent, LoadingComponent } from '@shared/components';
import { ZoomInDirective } from '@shared/directives';

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
    ShortTextPipe,
    TitleComponent,
    LoadingComponent,
    ZoomInDirective,
  ],
})
export class ChampionsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ChampionDetailsComponent,
  SingleChampionComponent,
  ChampionsComponent,
  SkinsComponent,
} from './index';

import { NgxPaginationModule } from 'ngx-pagination';

import { RouterModule, Routes } from '@angular/router';

import { ShortTextPipe } from '@shared/pipes';
import { TitleComponent, LoadingComponent } from '@shared/components';
import { ZoomInDirective } from '@shared/directives';

const routes: Routes = [
  { path: '', component: ChampionsComponent },
  { path: ':id', component: ChampionDetailsComponent },
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxPaginationModule,
        ShortTextPipe,
        TitleComponent,
        LoadingComponent,
        ZoomInDirective,
        ChampionDetailsComponent,
        SingleChampionComponent,
        ChampionsComponent,
        SkinsComponent,
    ],
})
export class ChampionsModule {}

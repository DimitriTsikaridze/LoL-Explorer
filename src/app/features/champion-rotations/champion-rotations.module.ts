import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionRotationsComponent } from './champion-rotations/champion-rotations.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from '../../shared/components/title/title.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

const routes: Routes = [{ path: '', component: ChampionRotationsComponent }];

@NgModule({
  declarations: [ChampionRotationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleComponent,
    LoadingComponent,
  ],
})
export class ChampionRotationsModule {}

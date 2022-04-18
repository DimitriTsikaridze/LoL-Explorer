import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionRotationsComponent } from './champion-rotations/champion-rotations.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ChampionRotationsComponent }];

@NgModule({
  declarations: [ChampionRotationsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChampionRotationsModule {}

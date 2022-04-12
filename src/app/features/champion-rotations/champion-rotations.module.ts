import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionRotationsRoutingModule } from './champion-rotations-routing.module';
import { ChampionRotationsComponent } from './champion-rotations.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChampionRotationsComponent],
  imports: [CommonModule, ChampionRotationsRoutingModule, SharedModule],
})
export class ChampionRotationsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionRotationsComponent } from './champion-rotations.component';

const routes: Routes = [{ path: '', component: ChampionRotationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionRotationsRoutingModule {}

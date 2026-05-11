import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { ChampionDetails } from '@models/champion-details.model';
import { Skin } from '@models/skin.model';

import { TitleComponent } from '@shared/components';
import { ZoomInDirective } from '@shared/directives';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent, ZoomInDirective],
})
export class SkinsComponent implements OnInit {
  private SKIN_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/';

  readonly champion = input.required<ChampionDetails>();
  skins: Skin[] = [];

  ngOnInit(): void {
    this.getSkins(this.champion().key);
  }

  getSkins(key: string) {
    for (let i = 1; i < this.champion().skins.length; i++) {
      const { num, id, name } = this.champion().skins[i];
      this.skins.push({
        num: num,
        id: id,
        name: name,
        url: `${this.SKIN_URL}${key}/${id}.jpg`,
      });
    }
  }
}

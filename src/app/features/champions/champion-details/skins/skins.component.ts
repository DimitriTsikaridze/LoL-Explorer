import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ChampionDetails } from '@models/champion-details.model';
import { Skin } from '@models/skin.model';
import { ZoomInDirective } from '../../../../shared/directives/zoom-in.directive';
import { TitleComponent } from '../../../../shared/components/title/title.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-skins',
    templateUrl: './skins.component.html',
    styleUrls: ['./skins.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgFor,
        TitleComponent,
        ZoomInDirective,
    ],
})
export class SkinsComponent implements OnInit {
  private SKIN_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/';

  @Input() champion: ChampionDetails;
  skins: Skin[] = [];

  ngOnInit(): void {
    this.getSkins(this.champion.key);
  }

  getSkins(key: string) {
    for (let i = 1; i < this.champion.skins.length; i++) {
      let { num, id, name } = this.champion.skins[i];
      this.skins.push({
        num: num,
        id: id,
        name: name,
        url: `${this.SKIN_URL}${key}/${id}.jpg`,
      });
    }
  }
}

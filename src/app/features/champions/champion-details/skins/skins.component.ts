import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChampionDetails } from '@models/champion-details.model';
import { Skin } from '@models/skin.model';
import { SkinPreviewComponent } from '../skin-preview/skin-preview.component';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinsComponent implements OnInit {
  private SKIN_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/';

  @Input() champion!: ChampionDetails;
  skins: Skin[] = [];

  constructor(public dialog: MatDialog) {}

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

  openDialog(skin: Skin) {
    this.dialog.open(SkinPreviewComponent, {
      data: {
        skin: skin,
        key: this.champion.key,
      },
      minHeight: '80vh',
      maxHeight: '90vh',
      width: '80vw',
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChampionDetails, Skin } from '../models/champion-details';
import { SkinPreviewComponent } from '../skin-preview/skin-preview.component';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
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
      height: '90vh',
      width: '80vw',
      maxWidth: '80vw',
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ChampionDetails, Skin } from '../models/champion-details';

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

  constructor() {}

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

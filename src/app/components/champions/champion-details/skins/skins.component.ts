import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChampionDetails } from '../models/champion-details';
import { SkinServiceService } from './skin-service.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
})
export class SkinsComponent implements OnInit {
  @Input() champion!: ChampionDetails;
  skins!: Observable<string[]>;
  skinURL: string = '';

  constructor(private skinService: SkinServiceService) {}

  ngOnInit(): void {
    this.skins = this.skinService.getSkins(this.champion.key);
  }

  onNavigateToSkin(id: any) {
    this.skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${id}`;
  }
}

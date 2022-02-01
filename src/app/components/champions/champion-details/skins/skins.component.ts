import { Component, Input, OnInit } from '@angular/core';
import { ChampionDetails } from '../models/champion-details';
import { SkinServiceService } from './skin-service.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
})
export class SkinsComponent implements OnInit {
  @Input() champion!: ChampionDetails;
  skins: string[] = [];

  constructor(private skinService: SkinServiceService) {}

  ngOnInit(): void {
    this.skinService.getSkins(this.champion.key).subscribe((data) => {
      this.skins = data;
    });
  }
}

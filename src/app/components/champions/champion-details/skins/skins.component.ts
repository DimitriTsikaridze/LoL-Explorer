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

  constructor(private skinService: SkinServiceService) {}

  ngOnInit(): void {
    this.skins = this.skinService.getSkins(this.champion.key);
  }
}

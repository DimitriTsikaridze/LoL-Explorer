import { Component, Input, OnInit } from '@angular/core';
import { ChampionDetails } from '../models/champion-details';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
})
export class SkinsComponent implements OnInit {
  @Input() champion!: ChampionDetails;

  constructor() {}

  ngOnInit(): void {}
}

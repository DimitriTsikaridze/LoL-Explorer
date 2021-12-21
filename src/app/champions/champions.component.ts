import { Component, OnInit } from '@angular/core';
import { Champion } from '../models/champion-response';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  constructor(private championsService: ChampionsService) {}
  champions!: Champion[];

  ngOnInit(): void {}

  onGetChampions() {
    this.championsService.getChampions('splash').subscribe((championsData) => {
      this.champions = championsData.slice(0, 3);
    });
  }
}

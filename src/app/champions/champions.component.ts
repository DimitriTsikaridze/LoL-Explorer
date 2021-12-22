import { Component, OnDestroy, OnInit } from '@angular/core';
import { Champion } from '../models/champion-response';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  champions!: Champion[];

  private championAmount = 0;

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    if (this.championsService.champions.length) {
      this.champions = this.championsService.champions.slice(
        0,
        this.championAmount
      );
    } else {
      this.championsService
        .getChampions('splash')
        .subscribe((championsData) => {
          this.champions = championsData.slice(this.championAmount);
        });
    }
  }
}

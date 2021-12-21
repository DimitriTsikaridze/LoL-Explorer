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

  ngOnInit(): void {
    this.championsService
      .getChampions('tiles', 5)
      .subscribe((championsData) => {
        this.champions = championsData;
      });
  }

  onGetChampions() {}
}

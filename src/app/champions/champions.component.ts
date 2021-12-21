import { Component, OnInit } from '@angular/core';
import { Champion } from '../models/champion-response';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  champions!: Champion[];
  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.championsService
      .getChampions('splash', 4)
      .subscribe((championsData) => {
        this.champions = championsData;
      });
  }
}

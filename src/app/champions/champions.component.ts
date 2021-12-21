import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
      .getChampions('splash', 3)
      .subscribe((championsData) => {
        this.champions = championsData;
      });
  }
}

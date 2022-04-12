import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Champion } from '../../../models/champion-response';
import { ChampionsService } from '../../../services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  champions!: Champion[];
  p: number = 1;

  constructor(
    private championsService: ChampionsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Champions');
    if (this.championsService.champions.length) {
      this.champions = this.championsService.champions;
    } else {
      this.championsService.getChampions().subscribe((championsData) => {
        this.champions = championsData;
      });
    }
  }
}

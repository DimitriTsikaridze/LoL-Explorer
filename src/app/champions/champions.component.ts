import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  constructor(private championsService: ChampionsService) {}
  champions!: any;

  ngOnInit(): void {}

  onGetChampions() {
    this.championsService.getChampions().subscribe((championsData) => {
      this.champions = championsData;
      console.log(this.champions);
    });
  }
}

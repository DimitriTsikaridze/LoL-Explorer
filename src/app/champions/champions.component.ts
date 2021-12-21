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
// <<<<<<< zuka-theme
//     this.championsService.getChampions('splash').subscribe((championsData) => {
//       this.champions = championsData;
//     });
// =======
//     this.championsService
//       .getChampions('tiles', 5)
//       .subscribe((championsData) => {
//         this.champions = championsData;
//       });
// >>>>>>> main
  }

  onGetChampions() {}
}

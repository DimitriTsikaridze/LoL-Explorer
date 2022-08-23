import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Champion } from '@models/champion.model';
import { ChampionsService } from '@services/champions.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChampionsComponent implements OnInit {
  champions$: Observable<Champion[]>;
  p: number = 1;

  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    if (this.championsService.champions.length) {
      this.champions$ = of(this.championsService.champions);
    } else {
      this.champions$ = this.championsService.getChampions();
    }
  }
}

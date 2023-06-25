import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Champion } from '@models/champion.model';
import { ChampionsService } from '@services/champions.service';
import { Observable } from 'rxjs';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitleComponent } from '@shared/components';
import { SingleChampionComponent } from './single-champion/single-champion.component';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TitleComponent,
    NgxPaginationModule,
    NgIf,
    NgFor,
    SingleChampionComponent,
    AsyncPipe,
  ],
})
export class ChampionsComponent implements OnInit {
  champions$: Observable<Champion[]>;
  p: number = 1;

  private championsService = inject(ChampionsService);

  ngOnInit(): void {
    this.champions$ = this.championsService.getChampions();
  }
}

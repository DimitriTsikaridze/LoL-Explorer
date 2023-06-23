import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ChampionDetails } from '@models/champion-details.model';
import { ChampionDetailsService } from '@services/champion-details.service';
import { map, Observable, switchMap, tap } from 'rxjs';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { SkinsComponent } from './skins/skins.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-champion-details',
    templateUrl: './champion-details.component.html',
    styleUrls: ['./champion-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        RouterLink,
        TitleComponent,
        SkinsComponent,
        LoadingComponent,
        AsyncPipe,
    ],
})
export class ChampionDetailsComponent implements OnInit {
  champion$: Observable<ChampionDetails>;
  championNames: string[];
  currentId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private championDetailsService: ChampionDetailsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.champion$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((name) => this.championDetailsService.getSingleChampion(name)),
      tap(({ name, id }) => {
        this.currentId = id;
        this.titleService.setTitle(`${name} Details`);
      })
    );
    this.championDetailsService
      .getChampionNames()
      .subscribe((data) => (this.championNames = data));
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && this.currentId != 'Zyra') {
      this.nextChampion(this.currentId);
    }
    if (event.key === 'ArrowLeft' && this.currentId != 'Aatrox') {
      this.previousChampion(this.currentId);
    }
  }

  previousChampion(id: string) {
    let currentChampion =
      this.championNames[this.championNames.indexOf(id) - 1];
    this.router.navigate(['/champions', currentChampion]);
  }

  nextChampion(id: string) {
    let currentChampion =
      this.championNames[this.championNames.indexOf(id) + 1];
    this.router.navigate(['/champions', currentChampion]);
  }
}

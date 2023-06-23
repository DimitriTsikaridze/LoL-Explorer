import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  inject,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { ChampionDetails } from '@models/champion-details.model';
import { ChampionDetailsService } from '@services/champion-details.service';
import { map, Observable, switchMap, tap } from 'rxjs';
import { SkinsComponent } from './skins/skins.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { TitleComponent, LoadingComponent } from '@shared/components';

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private championDetailsService = inject(ChampionDetailsService);
  private titleService = inject(Title);

  champion$: Observable<ChampionDetails>;
  championNames: string[];
  currentId: string;

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

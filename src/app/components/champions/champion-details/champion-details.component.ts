import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ChampionDetails } from './models/champion-details';
import { ChampionDetailsService } from './services/champion-details.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss'],
})
export class ChampionDetailsComponent implements OnInit {
  champion!: ChampionDetails | null;
  championNames!: string[];
  currentId!: string;
  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private championDetailsService: ChampionDetailsService
  ) {}

  ngOnInit(): void {
    this.championDetailsService
      .getChampionNames()
      .subscribe((data) => (this.championNames = data));

    this.route.params.subscribe((params: Params) => {
      this.currentId = params['id'];
      this.championDetailsService
        .getSingleChampion(params['id'])
        .subscribe((champion) => (this.champion = champion));
    });
  }

  onBack() {
    this.router.navigate(['/champions']);
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextChampion(this.currentId);
    }
    if (event.key === 'ArrowLeft') {
      this.previousChampion(this.currentId);
    }
  }

  previousChampion(id: string) {
    this.champion = null;
    let currentChampion =
      this.championNames[this.championNames.indexOf(id) - 1];
    this.router.navigate(['/champions', currentChampion]);
  }

  nextChampion(id: string) {
    this.champion = null;
    let currentChampion =
      this.championNames[this.championNames.indexOf(id) + 1];
    this.router.navigate(['/champions', currentChampion]);
  }
}

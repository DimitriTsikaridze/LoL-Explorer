import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionDetails } from '../../../models/champion-details';
import { ChampionDetailsService } from '../../../services/champion-details.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss'],
})
export class ChampionDetailsComponent implements OnInit {
  champion!: ChampionDetails;
  championNames: string[] = [];
  currentId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private championDetailsService: ChampionDetailsService
  ) {}

  ngOnInit(): void {
    this.championDetailsService
      .getChampionNames()
      .subscribe((data) => (this.championNames = data));

    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
      this.championDetailsService
        .getSingleChampion(params['id'])
        .subscribe((champion) => (this.champion = champion));
    });
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
    this.router.navigate([
      '/champions',
      this.championNames[this.championNames.indexOf(id) - 1],
    ]);
  }

  nextChampion(id: string) {
    this.router.navigate([
      '/champions',
      this.championNames[this.championNames.indexOf(id) + 1],
    ]);
  }
}

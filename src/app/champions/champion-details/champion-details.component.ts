import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionDetails } from '../../models/champion-details';
import { ChampionDetailsService } from '../../services/champion-details.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss'],
})
export class ChampionDetailsComponent implements OnInit {
  champion!: ChampionDetails;
  championNames: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private championDetailsService: ChampionDetailsService
  ) {}

  ngOnInit(): void {
    this.championNames = this.championDetailsService.getChampionNames();

    this.route.params.subscribe((params) => {
      this.championDetailsService
        .getSingleChampion(params['id'])
        .subscribe((champion) => (this.champion = champion));
    });
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

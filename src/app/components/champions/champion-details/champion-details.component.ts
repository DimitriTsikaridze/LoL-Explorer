import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChampionDetails } from './models/champion-details';
import { ChampionDetailsService } from './services/champion-details.service';

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

    this.route.params.subscribe((params: Params) => {
      this.currentId = params['id'];
      this.championDetailsService
        .getSingleChampion(params['id'])
        .subscribe(
          (champion) => ((this.champion = champion), console.log(this.champion))
        );
    });
  }
}

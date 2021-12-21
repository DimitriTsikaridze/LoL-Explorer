import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionDetails } from '../models/champion-details';

import { ChampionDetailsService } from '../services/champion-details.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss'],
})
export class ChampionDetailsComponent implements OnInit {
  champion!: ChampionDetails;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private championDetailsService: ChampionDetailsService
  ) {}

  ngOnInit(): void {
    this.championDetailsService
      .getSingleChampion(this.route.snapshot.params['id'])
      .subscribe((data) => (this.champion = data));
  }

  onGoBack() {
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChampionMastery } from './models/champion-mastery';
import { SummonerInfo } from './models/summoner-info';
import { SearchSummonerService } from './services/search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
})
export class SearchSummonerComponent {
  constructor(
    private searchSummonerService: SearchSummonerService,
    private router: Router
  ) {}

  summonerName: FormControl = new FormControl();

  summonerInfo!: SummonerInfo | null;
  championMasteries!: ChampionMastery[] | null;

  onGetSummoner() {
    this.summonerInfo = null;
    this.championMasteries = null;
    this.searchSummonerService
      .getSummonerInfo(this.summonerName.value)
      .subscribe((data) => {
        this.summonerInfo = data;
        this.searchSummonerService.getChampionKeys();
        this.searchSummonerService
          .getChampionMasteries(this.summonerInfo.id)
          .subscribe((data) => {
            this.championMasteries = data;
          });
      });
  }

  navigateToChampionDetails(championName: string) {
    this.router.navigate(['champions', championName]);
  }
}

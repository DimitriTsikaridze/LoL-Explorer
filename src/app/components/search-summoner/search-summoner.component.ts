import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChampionMastery } from './models/champion-mastery';
import { SummonerInfo } from './models/summoner-info';
import { SearchSummonerService } from './services/search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
})
export class SearchSummonerComponent implements OnInit {
  constructor(private searchSummonerService: SearchSummonerService) {}

  summonerName: FormControl = new FormControl('AlphaFrog');
  summonerInfo!: SummonerInfo;
  championMasteries!: ChampionMastery[];

  ngOnInit(): void {
    this.onGetSummoner();
  }

  onGetSummoner() {
    this.searchSummonerService
      .getSummonerInfo(this.summonerName.value)
      .subscribe((data) => {
        this.summonerInfo = data;
        this.searchSummonerService.getChampionKeys();
        this.searchSummonerService
          .getChampionMasteries(this.summonerInfo.id)
          .subscribe((data) => {
            this.championMasteries = data.slice(0, 3);
          });
      });
  }
}

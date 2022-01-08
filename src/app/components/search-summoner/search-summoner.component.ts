import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SummonerInfo } from './models/summoner-info';
import { SearchSummonerService } from './services/search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
})
export class SearchSummonerComponent implements OnInit {
  constructor(private searchSummoner: SearchSummonerService) {}

  summonerName: FormControl = new FormControl('AlphaFrog');
  summonerInfo!: SummonerInfo;

  ngOnInit(): void {
    this.searchSummoner
      .getSummonerInfo(this.summonerName.value)
      .subscribe((data) => {
        this.summonerInfo = data;
      });
  }

  onGetSummoner() {
    this.searchSummoner
      .getSummonerInfo(this.summonerName.value)
      .subscribe((data) => {
        this.summonerInfo = data;
      });
  }
}

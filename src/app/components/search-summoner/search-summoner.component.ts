import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  summonerName: FormControl = new FormControl('alphafrog');
  onGetSummoner() {
    this.searchSummonerService
      .getSummonerMasteries(this.summonerName.value)
      .subscribe();
  }
}

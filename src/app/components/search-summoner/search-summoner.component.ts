import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SummonerInfo } from './models/summoner-info';
import { SearchSummonerService } from './services/search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
})
export class SearchSummonerComponent {
  constructor(
    private summonerService: SearchSummonerService,
    private router: Router
  ) {}

  summonerName: FormControl = new FormControl('alphafrog');

  onGetSummoner() {
    this.summonerService
      .getSummonerInfo(this.summonerName.value)
      .subscribe((summoner: SummonerInfo) => {
        this.summonerService
          .getSummonerMasteries(summoner.id)
          .subscribe((data) => {
            console.log(data);
          });
      });
  }
}

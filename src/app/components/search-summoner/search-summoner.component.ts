import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchSummonerService } from './search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
})
export class SearchSummonerComponent implements OnInit {
  constructor(private searchSummoner: SearchSummonerService) {}

  summonerName: FormControl = new FormControl('AlphaFrog');

  ngOnInit(): void {}

  onGetSummoner() {
    this.searchSummoner
      .getSummonerInfo(this.summonerName.value)
      .subscribe((data) => console.log(data));
  }
}

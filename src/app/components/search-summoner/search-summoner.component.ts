import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CdragonChampionsService } from '../../services/cdragon-champions.service';
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
    private cDragon: CdragonChampionsService,
    private router: Router
  ) {}

  summonerName: FormControl = new FormControl('alphafrog');
  summonerInfo!: SummonerInfo;

  onGetSummoner() {
    this.summonerService
      .getSummonerInfo(this.summonerName.value)
      .subscribe((summoner: SummonerInfo) => {
        this.summonerService
          .getSummonerMasteries(summoner.id)
          .subscribe((info) => {
            this.summonerInfo = info;
            for (let i = 0; i < 3; i++) {
              this.summonerInfo.championMasteries[i].championName;
              this.cDragon
                .getChampion(this.summonerInfo.championMasteries[i].championId)
                .subscribe((data: any) => {
                  this.summonerInfo.championMasteries[i].championName =
                    data.alias;
                });
            }
          });
      });
  }

  onChampionClick(id: string) {
    this.router.navigate(['/champions/', id]);
  }
}

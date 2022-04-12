import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CdragonChampionsService } from '../../../services/cdragon-champions.service';
import { SummonerInfo } from '../../../models/summoner-info';
import { SearchSummonerService } from '../../../services/search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
})
export class SearchSummonerComponent implements OnInit {
  constructor(
    private summonerService: SearchSummonerService,
    private cDragon: CdragonChampionsService,
    private router: Router,
    private titleService: Title
  ) {}

  summonerName: FormControl = new FormControl('AlphaFrog');
  summonerInfo!: SummonerInfo | null;
  isError = false;

  ngOnInit(): void {
    this.titleService.setTitle('Search Summoner');
  }

  onGetSummoner() {
    this.summonerService.getSummonerInfo(this.summonerName.value).subscribe({
      next: (summoner: SummonerInfo) => {
        this.isError = false;
        this.summonerService
          .getSummonerMasteries(summoner.id)
          .subscribe((info) => {
            this.summonerInfo = info;
            for (let i = 0; i < 3; i++) {
              this.summonerInfo.championMasteries[i].championName;
              this.cDragon
                .getChampion(this.summonerInfo.championMasteries[i].championId)
                .subscribe((data: any) => {
                  this.summonerInfo!.championMasteries[i].championName =
                    data.alias;
                });
            }
          });
      },
      error: () => {
        this.summonerInfo = null;
        this.isError = true;
      },
    });
  }

  onChampionClick(id: string) {
    this.router.navigate(['/champions/', id]);
  }
}

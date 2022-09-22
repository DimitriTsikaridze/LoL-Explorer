import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { CdragonChampionsService } from '@services/cdragon-champions.service';
import { SummonerInfo } from '@models/summoner-info.model';
import { SearchSummonerService } from '@services/search-summoner.service';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  styleUrls: ['./search-summoner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSummonerComponent implements OnInit {
  constructor(
    private summonerService: SearchSummonerService,
    private cDragon: CdragonChampionsService,
    private cd: ChangeDetectorRef
  ) {}

  summonerName: UntypedFormControl = new UntypedFormControl('AlphaFrog');
  summonerInfo: SummonerInfo | null;
  isError = false;

  ngOnInit(): void {
    this.onGetSummoner();
  }

  onGetSummoner() {
    this.summonerInfo = null;
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
                  this.cd.detectChanges();
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
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { SummonerInfo } from '@models/summoner-info.model';
import { CdragonChampionsService } from '@services/cdragon-champions.service';
import { SearchSummonerService } from '@services/search-summoner.service';
import { LoadingComponent, TitleComponent } from '@shared/components';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  imports: [
    TitleComponent,
    SearchBarComponent,
    DecimalPipe,
    RouterLink,
    LoadingComponent,
  ],
  styleUrls: ['./search-summoner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchSummonerComponent {
  constructor(
    private summonerService: SearchSummonerService,
    private cDragon: CdragonChampionsService,
    private cd: ChangeDetectorRef
  ) {
    this.onGetSummoner();
  }

  summonerName: UntypedFormControl = new UntypedFormControl('AlphaFrog');
  summonerInfo: SummonerInfo | null;
  isError = false;

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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiEnvironment } from '../../../../environments/environment.api';
import { RiotApiService } from '../../../riot-api.service';
import { ChampionKeys } from '../models/champion-keys';
import { ChampionMastery } from '../models/champion-mastery';
import { SummonerInfo } from '../models/summoner-info';

@Injectable({
  providedIn: 'root',
})
export class SearchSummonerService {
  private summonerInfo!: SummonerInfo;

  private championKeys: ChampionKeys[] = [];

  constructor(private http: HttpClient, private riotAPI: RiotApiService) {}

  getSummonerInfo(name: string) {
    return this.http
      .get<SummonerInfo>(
        `${this.riotAPI.summonerURL}${name}?api_key=${apiEnvironment.key}`
      )
      .pipe(
        map((value: SummonerInfo) => {
          const { id, name, profileIconId, summonerLevel } = value;
          this.summonerInfo = {
            name: name,
            id: id,
            profileIconId: profileIconId,
            summonerLevel: summonerLevel,
            summonerProfileURL: `${this.riotAPI.profileIconURL}${profileIconId}.png`,
          };
          return this.summonerInfo;
        })
      );
  }

  getChampionKeys() {
    return this.http
      .get(this.riotAPI.championsURL)
      .pipe(
        map((value: any) => {
          const championsData: any = Object.values(value.data);
          for (let champion of championsData) {
            this.championKeys.push({
              name: champion.name,
              key: champion.key,
              id: champion.id,
            });
          }
        })
      )
      .subscribe();
  }

  getChampionMasteries(summonerID: string) {
    const championMastery: ChampionMastery[] = [];
    return this.http
      .get(
        `${this.riotAPI.championMasteriesURL}${summonerID}?api_key=${apiEnvironment.key}`
      )
      .pipe(
        map((data: any) => {
          for (let i = 0; i < 3; i++) {
            let champObj = this.championKeys.find(
              (val: any) => val.key == data[i].championId
            );
            championMastery.push({
              championId: data[i].championId,
              championPoints: data[i].championPoints,
              championLevel: data[i].championLevel,
              championName: champObj?.name,
              championImgURL: `${this.riotAPI.championIconURL}${champObj?.id}_0.jpg`,
            });
          }
          return championMastery;
        })
      );
  }
}

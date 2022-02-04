import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { apiEnvironment } from '../../../../environments/environment.api';
import { ChampionMastery, SummonerInfo } from '../models/summoner-info';

@Injectable({
  providedIn: 'root',
})
export class SearchSummonerService {
  private INFO_URL =
    'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
  private MASTERIES_URL =
    'https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner';
  private summonerInfo!: SummonerInfo;

  constructor(private http: HttpClient) {}

  getSummonerInfo(summonerName: string) {
    return this.http
      .get<SummonerInfo>(
        `${this.INFO_URL}/${summonerName}?api_key=${apiEnvironment.key}`
      )
      .pipe(
        map((info: SummonerInfo) => {
          const { id, summonerLevel, profileIconId, name } = info;
          this.summonerInfo = {
            id: id,
            name: name,
            summonerLevel: summonerLevel,
            profileIconId: profileIconId,
            championMasteries: [],
          };
          return this.summonerInfo;
        })
      );
  }

  getSummonerMasteries(summonerID: string) {
    return this.http
      .get<ChampionMastery[]>(
        `${this.MASTERIES_URL}/${summonerID}?api_key=${apiEnvironment.key}`
      )
      .pipe(
        map((championMastery: ChampionMastery[]) => {
          for (let i = 0; i < 3; i++) {
            const { championId, championLevel, championPoints } =
              championMastery[i];
            this.summonerInfo.championMasteries.push({
              championId: championId,
              championLevel: championLevel,
              championPoints: championPoints,
            });
          }

          return this.summonerInfo;
        })
      );
  }
}

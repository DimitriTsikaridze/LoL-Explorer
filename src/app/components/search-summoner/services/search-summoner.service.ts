import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiEnvironment } from '../../../../environments/environment.api';
import { SummonerInfo } from '../models/summoner-info';

@Injectable({
  providedIn: 'root',
})
export class SearchSummonerService {
  private championMasteriesURL = `https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/`;

  private championsURL =
    'https://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json';

  private summonerURL =
    'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

  private profileIconURL =
    'https://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/';
  private championIconURL =
    'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/';

  private summonerInfo!: SummonerInfo;

  private championKeys: any = [];

  championMastery: any = [];

  constructor(private http: HttpClient) {}

  getSummonerInfo(name: string) {
    return this.http
      .get<SummonerInfo>(
        `${this.summonerURL}${name}?api_key=${apiEnvironment.key}`
      )
      .pipe(
        map((value: SummonerInfo) => {
          const { id, name, profileIconId, summonerLevel } = value;
          this.summonerInfo = {
            name: name,
            id: id,
            profileIconId: profileIconId,
            summonerLevel: summonerLevel,
            summonerProfileURL: `${this.profileIconURL}${profileIconId}.png`,
          };
          return this.summonerInfo;
        })
      );
  }

  getChampionKeys() {
    return this.http
      .get(this.championsURL)
      .pipe(
        map((value: any) => {
          let championsData: any = Object.values(value.data);
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
    return this.http
      .get(
        `${this.championMasteriesURL}${summonerID}?api_key=${apiEnvironment.key}`
      )
      .pipe(
        map((data: any) => {
          for (let i = 0; i < 3; i++) {
            let champObj = this.championKeys.find(
              (val: any) => val.key == data[i].championId
            );
            this.championMastery.push({
              championId: data[i].championId,
              championPoints: data[i].championPoints,
              championLevel: data[i].championLevel,
              championName: champObj.name,
              championImgURL: `${this.championIconURL}${champObj.id}_0.jpg`,
            });
          }
          return this.championMastery;
        })
      );
  }
}

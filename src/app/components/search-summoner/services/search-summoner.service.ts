import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiEnvironment } from '../../../../environments/environment.api';
import { SummonerInfo } from '../models/summoner-info';

@Injectable({
  providedIn: 'root',
})
export class SearchSummonerService {
  private summonerURL =
    'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

  private profileIconURL =
    'http://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/';

  private summonerInfo!: SummonerInfo;

  summonerDetails: any = {};

  constructor(private http: HttpClient) {}

  getSummonerInfo(name: string) {
    return this.http
      .get<SummonerInfo>(
        `${this.summonerURL}${name}?api_key=${apiEnvironment.API_KEY}`
      )
      .pipe(
        map((value: SummonerInfo) => {
          const { id, accountId, puuid, name, profileIconId, summonerLevel } =
            value;
          this.summonerInfo = {
            name: name,
            accountId: accountId,
            puuid: puuid,
            id: id,
            profileIconId: profileIconId,
            summonerLevel: summonerLevel,
          };
          return this.summonerInfo;
        })
      );
  }
}

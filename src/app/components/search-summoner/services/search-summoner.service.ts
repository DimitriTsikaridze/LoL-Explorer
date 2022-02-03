import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { apiEnvironment } from '../../../../environments/environment.api';

@Injectable({
  providedIn: 'root',
})
export class SearchSummonerService {
  private INFO_URL =
    'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name';

  constructor(private http: HttpClient) {}

  getSummonerMasteries(summonerName: string) {
    return this.http
      .get(`${this.INFO_URL}/${summonerName}?api_key=${apiEnvironment.key}`)
      .pipe(tap((data) => console.log(data)));
  }
}

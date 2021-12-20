import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnvironment } from '../../environments/environment.api';
import { Summoner } from '../models/summoner';

@Injectable({
  providedIn: 'root',
})
export class SummonerService {
  private BASE_URL = 'https://eun1.api.riotgames.com/lol/';
  private API_KEY = `?api_key=${apiEnvironment.API_KEY}`;

  constructor(private http: HttpClient) {}

  getSummoner(summonerName: string): Observable<Summoner> {
    let SUMMONER_URL = `${this.BASE_URL}summoner/v4/summoners/by-name/${summonerName}${this.API_KEY}`;
    return this.http.get<Summoner>(SUMMONER_URL);
  }

  getSummonerProfileIcon(iconId: number) {
    return `https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${iconId}.png`;
  }
}

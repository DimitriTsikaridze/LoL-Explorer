import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RiotApiService {
  private dataDragonURL = `https://ddragon.leagueoflegends.com/cdn/`;
  private lolAPIURL = `https://eun1.api.riotgames.com/lol/`;

  constructor(private http: HttpClient) {}

  championsURL = `${this.dataDragonURL}12.1.1/data/en_US/champion.json`;
  summonerURL = `${this.lolAPIURL}summoner/v4/summoners/by-name/`;
  championMasteriesURL = `${this.lolAPIURL}champion-mastery/v4/champion-masteries/by-summoner/`;
  profileIconURL = `${this.dataDragonURL}12.1.1/img/profileicon/`;
  championIconURL = `${this.dataDragonURL}img/champion/tiles/`;
}

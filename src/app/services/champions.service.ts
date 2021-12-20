import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
// import { ChampionResponse } from '../models/champion-response';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private URL =
    'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json';
  constructor(private http: HttpClient) {}

  getChampions() {
    return this.http.get(this.URL).pipe(
      tap((res: any) => {
        for (let champion in res.data) {
          console.log(res.data[champion]);
        }
      })
    );
  }
}

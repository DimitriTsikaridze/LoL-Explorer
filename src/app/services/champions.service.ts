import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Champion, ChampionResponse } from '../models/champion-response';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private URL =
    'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json';

  private champiosURL = 'https://ddragon.leagueoflegends.com/cdn/img/champion/';

  private champions: Champion[] = [];

  constructor(private http: HttpClient) {}

  getChampions(imageType: 'splash' | 'loading' | 'tiles' | 'centered') {
    return this.http.get<ChampionResponse>(this.URL).pipe(
      map((value: ChampionResponse) => {
        for (let champion in value.data) {
          this.champions.push({
            id: value.data[champion].id,
            key: value.data[champion].key,
            name: value.data[champion].name,
            blurb: value.data[champion].blurb,
            title: value.data[champion].title,
            imageURL: `${this.champiosURL}${imageType}/${value.data[champion].id}_0.jpg`,
          });
        }
        return this.champions;
      })
    );
  }
}

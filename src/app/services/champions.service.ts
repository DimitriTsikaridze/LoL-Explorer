import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Champion, ChampionResponse } from '../models/champion-response';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  readonly URL =
    'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json';

  readonly championsURL =
    'https://ddragon.leagueoflegends.com/cdn/img/champion/';

  readonly champions: Champion[] = [];

  constructor(private http: HttpClient) {}

  getChampions(imageType: 'splash' | 'loading' | 'tiles' | 'centered') {
    return this.http.get<ChampionResponse>(this.URL).pipe(
      map((value: ChampionResponse) => {
        for (let champion in value.data) {
          const { id, key, name, blurb, title, tags } = value.data[champion];
          this.champions.push({
            id: id,
            key: key,
            name: name,
            blurb: blurb,
            title: title,
            tags: tags,
            imageURL: `${this.championsURL}${imageType}/${value.data[champion].id}_0.jpg`,
          });
        }
        return this.champions;
      })
    );
  }
}

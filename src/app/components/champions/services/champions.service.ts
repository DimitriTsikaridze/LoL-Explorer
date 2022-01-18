import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RiotApiService } from '../../../shared/riot-api.service';
import { Champion, ChampionResponse } from '../models/champion-response';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  readonly champions: Champion[] = [];

  constructor(private http: HttpClient, private riotAPI: RiotApiService) {}

  getChampions() {
    return this.http.get<ChampionResponse>(this.riotAPI.championsURL).pipe(
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
            imageURL: `${this.riotAPI.championIconURL}splash/${value.data[champion].id}_0.jpg`,
          });
        }
        return this.champions;
      })
    );
  }
}

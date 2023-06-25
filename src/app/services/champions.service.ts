import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';
import { ChampionResponse } from '@models/champion-response.model';
import { Champion } from '@models/champion.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  readonly champions: Champion[] = [];

  private http = inject(HttpClient);

  getChampions() {
    if (this.champions.length) {
      return of(this.champions);
    }

    return this.http.get<ChampionResponse>(environment.championsURL).pipe(
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
            imageURL: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${value.data[champion].key}/${value.data[champion].key}000.jpg`,
          });
        }
        return this.champions;
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RiotApiService } from './riot-api.service';
import { ChampionDetails } from '@models/champion-details.model';

@Injectable({
  providedIn: 'root',
})
export class ChampionDetailsService {
  private champion!: ChampionDetails;

  private championNames: string[] = [];

  constructor(private http: HttpClient, private riotAPI: RiotApiService) {}

  getSingleChampion(championID: string) {
    return this.http
      .get<ChampionDetails>(
        `${this.riotAPI.championDetailsURL}${championID}.json`
      )
      .pipe(
        map((value: any) => {
          const { id, key, lore, name, title, allytips, enemytips, tags } =
            value.data[championID];
          this.champion = {
            id: id,
            key: key,
            lore: lore,
            name: name,
            title: title,
            allyTips: allytips,
            enemyTips: enemytips,
            tags: tags,
            imageURL: `${this.riotAPI.championIconURL}splash/${championID}_0.jpg`,
            difficulty: value.data[championID].info.difficulty,
            skins: value.data[championID].skins,
          };
          return this.champion;
        })
      );
  }

  getChampionNames() {
    return this.http.get(this.riotAPI.championsURL).pipe(
      map((value: any) => {
        for (let name in value.data) {
          this.championNames.push(name);
        }
        return this.championNames;
      })
    );
  }
}

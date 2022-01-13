import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ChampionDetails } from '../models/champion-details';
import { ChampionsService } from '../../services/champions.service';

@Injectable({
  providedIn: 'root',
})
export class ChampionDetailsService {
  private championDetailsURL =
    'https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion/';

  private champion!: ChampionDetails;
  private championNames: string[] = [];

  constructor(
    private http: HttpClient,
    private championsService: ChampionsService
  ) {}

  getSingleChampion(championID: string) {
    return this.http
      .get<ChampionDetails>(`${this.championDetailsURL}${championID}.json`)
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
            imageURL: `${this.championsService.championsURL}splash/${championID}_0.jpg`,
            difficulty: value.data[championID].info.difficulty,
          };
          console.log(this.champion);
          return this.champion;
        })
      );
  }

  getChampionNames() {
    return this.http.get(this.championsService.URL).pipe(
      map((value: any) => {
        for (let name in value.data) {
          this.championNames.push(name);
        }
        return this.championNames;
      })
    );
  }
}

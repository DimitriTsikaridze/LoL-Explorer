import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CdragonChampionsService {
  private CHAMPION_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions';

  private http = inject(HttpClient);

  getChampion(id: number) {
    return this.http.get(`${this.CHAMPION_URL}/${id}.json`);
  }
}

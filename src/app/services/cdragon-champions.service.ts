import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CdragonChampionsService {
  private CHAMPION_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions';

  constructor(private http: HttpClient) {}

  getChampion(id: number) {
    return this.http.get(`${this.CHAMPION_URL}/${id}.json`);
  }
}

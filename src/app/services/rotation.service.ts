import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '@environments/environment';

interface ChampionRotationRespone {
  freeChampionIds: number[];
}

export interface FreeChampion {
  championID: number;
  imageURL: string;
}

@Injectable({
  providedIn: 'root',
})
export class RotationService {
  freeChampion: FreeChampion[] = [];

  constructor(private http: HttpClient) {}

  getFreeChampionIDs() {
    return this.http
      .get<ChampionRotationRespone>(environment.ROTATIONS_URL)
      .pipe(
        map((value: ChampionRotationRespone) => {
          for (const id of value.freeChampionIds) {
            this.freeChampion.push({
              championID: id,
              imageURL: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${id}/${id}000.jpg`,
            });
          }
          return this.freeChampion;
        }),
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }
}

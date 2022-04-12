import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RotationService {
  private rotationsURL = `https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations/?api_key=${environment.apiKey}`;
  freeChampion: any[] = [];

  constructor(private http: HttpClient) {}

  getFreeChampionIDs() {
    return this.http.get(this.rotationsURL).pipe(
      map((value: any) => {
        for (let id of value.freeChampionIds) {
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

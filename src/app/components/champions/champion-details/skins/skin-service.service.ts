import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkinServiceService {
  private SKINS_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/';

  skins: string[] = [];

  constructor(private http: HttpClient) {}

  getSkins(id: string) {
    this.skins.length = 0;
    return this.http.get(`${this.SKINS_URL}${id}.json`).pipe(
      map((data: any) => {
        data.skins.forEach((skin: any) => {
          this.skins.push(skin.splashPath.slice(skin.splashPath.indexOf('v1')));
        });
        return this.skins;
      })
    );
  }
}

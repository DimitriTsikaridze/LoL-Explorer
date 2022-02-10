import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkinServiceService {
  private SKINS_URL =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/';

  skins: any[] = [];

  constructor(private http: HttpClient) {}

  getSkins(id: string) {
    this.skins.length = 0;
    return this.http.get(`${this.SKINS_URL}${id}.json`).pipe(
      map((data: any) => {
        data.skins.forEach((skin: any) => {
          this.skins.push({
            url: skin.splashPath.slice(skin.splashPath.indexOf('v1')),
            name: skin.name,
          });
        });
        console.log(this.skins);
        return this.skins;
      })
    );
  }
}

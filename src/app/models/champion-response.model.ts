import { Champion } from '@models/champion.model';

export interface ChampionResponse {
  type: string;
  format: string;
  version: string;
  data: Champion[];
}

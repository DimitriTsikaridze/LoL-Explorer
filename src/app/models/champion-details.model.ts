import { Skin } from '@models/skin.model';

export interface ChampionDetails {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  allyTips: string;
  enemyTips: string;
  tags: string[];
  imageURL: string;
  difficulty: number;
  skins: Skin[];
}

export interface ChampionDetails {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  allyTips?: string;
  enemtTips?: string;
  tags?: string[];
  imageURL: string;
}

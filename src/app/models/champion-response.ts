export interface ChampionResponse {
  type: string;
  format: string;
  version: string;
  data: Champion[];
}
export interface Champion {
  id: string;
  key: number;
  name: string;
  blurb: string;
  title: string;
  imageURL: string;
}

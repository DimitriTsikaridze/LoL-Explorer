import { ChampionMastery } from '@models/championo-mastery.model';

export interface SummonerInfo {
  id: string;
  profileIconId: number;
  summonerLevel: number;
  name: string;
  championMasteries: ChampionMastery[];
}

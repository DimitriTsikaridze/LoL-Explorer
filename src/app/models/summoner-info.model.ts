import { ChampionMastery } from './champion-mastery.model';

export interface SummonerInfo {
  id: string;
  profileIconId: number;
  summonerLevel: number;
  name: string;
  championMasteries: ChampionMastery[];
}

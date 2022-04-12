export interface SummonerInfo {
  id: string;
  profileIconId: number;
  summonerLevel: number;
  name: string;
  championMasteries: ChampionMastery[];
}

export interface ChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  championName?: string;
}

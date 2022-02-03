export interface SummonerInfo {
  id: string;
  profileIconId: number;
  summonerLevel: number;
  championMasteries: ChampionMastery[];
}

export interface ChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
}

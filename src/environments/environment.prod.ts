const dataDragonURL = `https://ddragon.leagueoflegends.com/cdn/`;
const lolAPIURL = `https://eun1.api.riotgames.com/lol/`;
const API_KEY = 'RGAPI-3ca24785-edf1-4754-8d25-c51b7b8619bb';

export const environment = {
  production: true,
  apiKey: API_KEY, //API key expires in 24 hours
  championsURL: `${dataDragonURL}12.1.1/data/en_US/champion.json`,
  summonerURL: `${lolAPIURL}summoner/v4/summoners/by-name/`,
  championMasteriesURL: `${lolAPIURL}champion-mastery/v4/champion-masteries/by-summoner/`,
  profileIconURL: `${dataDragonURL}12.1.1/img/profileicon/`,
  championIconURL: `${dataDragonURL}img/champion/`,
  championDetailsURL: `${dataDragonURL}11.24.1/data/en_US/champion/`,
  ROTATIONS_URL: `https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations/?api_key=${API_KEY}`,
};

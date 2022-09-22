const dataDragonURL = `https://ddragon.leagueoflegends.com/cdn/`;
const lolAPIURL = `https://eun1.api.riotgames.com/lol/`;
const API_KEY = 'RGAPI-a04df90c-4d8e-47b8-a397-559074c6d405';

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

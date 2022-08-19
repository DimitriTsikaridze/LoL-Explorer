// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const dataDragonURL = `https://ddragon.leagueoflegends.com/cdn/`;
const lolAPIURL = `https://eun1.api.riotgames.com/lol/`;
const API_KEY = 'RGAPI-5cc66695-ec05-4cb4-b8d1-f445c4bf0e68';

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

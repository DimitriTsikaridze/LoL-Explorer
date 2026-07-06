// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const dataDragonURL = `https://ddragon.leagueoflegends.com/cdn/`;

export const environment = {
  production: true,
  championsURL: `${dataDragonURL}12.1.1/data/en_US/champion.json`,
  profileIconURL: `${dataDragonURL}12.1.1/img/profileicon/`,
  championIconURL: `${dataDragonURL}img/champion/`,
  championDetailsURL: `${dataDragonURL}11.24.1/data/en_US/champion/`,
  ROTATIONS_URL: `https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations/?api_key=RGAPI-7224dab6-6171-4ad3-ba8e-5a63c28326f3`, //?api_key=${API_KEY},
  apiKey: 'RGAPI-7224dab6-6171-4ad3-ba8e-5a63c28326f3',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

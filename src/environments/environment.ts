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
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

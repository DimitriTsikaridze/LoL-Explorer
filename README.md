# League of Legends API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Click [Here](https://lolapi-55c01.web.app) for Live Demo

## How to Run App

Install Angular CLI with NPM

```bash
npm install @angular/cli -g
```

Clone repository, go to [Riot Developer Portal](https://developer.riotgames.com/), register product and get API key. <br/>
put API key in `environment.ts` file.

```js
export const environment = {
  production: false,
  apiKey: "YOUR API KEY", //Development API key expires every 24 hours
};
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

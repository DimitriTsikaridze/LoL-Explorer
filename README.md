# League of Legends API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## How to Run App

Install Angular CLI with NPM

```bash
npm install @angular/cli -g
```

Clone repository, go to [Riot Developer Portal](https://developer.riotgames.com/), register product and get API key. <br/> create `environment.api.ts` file in environments folder and put your API key there in this format.

```js
export const apiEnvironment = {
  API_KEY: "YOUR_API_KEY",
};
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

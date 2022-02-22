import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './components/search-summoner/search-summoner.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SingleChampionComponent } from './components/champions/single-champion/single-champion.component';
import { ChampionDetailsComponent } from './components/champions/champion-details/champion-details.component';
import { ErrorComponent } from './components/error/error.component';
import { SharedModule } from './shared/shared.module';
import { ChampionRotationsComponent } from './components/champion-rotations/champion-rotations.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SkinsComponent } from './components/champions/champion-details/skins/skins.component';
import { SkinPreviewComponent } from './components/champions/champion-details/skin-preview/skin-preview.component';

const components = [
  HeaderComponent,
  SearchSummonerComponent,
  HomeComponent,
  ChampionsComponent,
  SingleChampionComponent,
  ChampionDetailsComponent,
  ErrorComponent,
  ChampionRotationsComponent,
  SkinsComponent,
  SkinPreviewComponent,
];

const modules = [
  HttpClientModule,
  RouterModule,
  AppRoutingModule,
  SharedModule,
];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...modules,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

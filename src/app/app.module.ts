import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './search-summoner/search-summoner.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SingleChampionComponent } from './components/champions/single-champion/single-champion.component';
import { ChampionDetailsComponent } from './components/champions/champion-details/champion-details.component';

const components = [
  HeaderComponent,
  DocumentationComponent,
  SearchSummonerComponent,
  HomeComponent,
  ChampionsComponent,
  SingleChampionComponent,
  ChampionDetailsComponent,
];

const modules = [
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  AppRoutingModule,
];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, BrowserAnimationsModule, ...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

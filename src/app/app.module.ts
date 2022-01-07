import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomeComponent } from './components/home/home.component';
import { SearchSummonerComponent } from './components/search-summoner/search-summoner.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SingleChampionComponent } from './components/champions/single-champion/single-champion.component';
import { ChampionDetailsComponent } from './components/champions/champion-details/champion-details.component';
import { ErrorComponent } from './components/error/error.component';
import { TitleComponent } from './components/title/title.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const components = [
  HeaderComponent,
  DocumentationComponent,
  SearchSummonerComponent,
  HomeComponent,
  ChampionsComponent,
  SingleChampionComponent,
  ChampionDetailsComponent,
  ErrorComponent,
  TitleComponent,
];

const modules = [
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  AppRoutingModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  LayoutModule,
];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, BrowserAnimationsModule, ...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

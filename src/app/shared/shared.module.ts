import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DocumentationComponent } from '../documentation/documentation.component';
import { ChampionsComponent } from '../champions/champions.component';
import { HomeComponent } from '../home/home.component';
import { SingleChampionComponent } from '../champions/single-champion/single-champion.component';
import { SearchSummonerComponent } from '../search-summoner/search-summoner.component';

const components = [
  HeaderComponent,
  DocumentationComponent,
  ChampionsComponent,
  SingleChampionComponent,
  SearchSummonerComponent,
  HomeComponent,
];

const modules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  RouterModule,
  AppRoutingModule,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}

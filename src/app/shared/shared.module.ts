import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../components/title/title.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [TitleComponent, SearchBarComponent];

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  NgxPaginationModule,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [components, modules],
})
export class SharedModule {}

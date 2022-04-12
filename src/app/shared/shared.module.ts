import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SearchBarComponent } from '../components/search-summoner/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZoomInDirective } from '../directives/zoom-in.directive';
import { ThrottleClickDirective } from '../directives/throttle-click.directive';
import { ShortTextPipe } from '../pipes/short-text.pipe';
import { MatDialogModule } from '@angular/material/dialog';

const components = [TitleComponent, SearchBarComponent];

const directives = [ZoomInDirective, ThrottleClickDirective];

const pipes = [ShortTextPipe];

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  FontAwesomeModule,
  MatDialogModule,
];

@NgModule({
  declarations: [components, directives, pipes],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [components, modules, directives, pipes],
})
export class SharedModule {}

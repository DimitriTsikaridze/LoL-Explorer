import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  RouterModule,
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, modules],
  exports: [modules, HeaderComponent],
})
export class LayoutModule {}

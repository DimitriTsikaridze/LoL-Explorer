import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from '@shared/components/title/title.component';
import { ZoomInDirective } from '@shared/directives';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TitleComponent,
        ZoomInDirective,
        HomeComponent,
    ],
})
export class HomeModule {}

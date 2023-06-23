import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZoomInDirective } from '../../../shared/directives/zoom-in.directive';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TitleComponent,
        ZoomInDirective,
        RouterLink,
    ],
})
export class HomeComponent {}

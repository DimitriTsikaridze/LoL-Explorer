import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Champion } from '@models/champion.model';
import { NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ZoomInDirective } from '@shared/directives';
import { ShortTextPipe } from '@shared/pipes';

@Component({
  selector: 'app-single-champion',
  templateUrl: './single-champion.component.html',
  styleUrls: ['./single-champion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, ZoomInDirective, NgIf, UpperCasePipe, ShortTextPipe],
})
export class SingleChampionComponent {
  @Input() champion: Champion;
  @Input() index: number;
}

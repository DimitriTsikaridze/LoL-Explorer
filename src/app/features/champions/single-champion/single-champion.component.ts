import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Champion } from '@models/champion.model';

@Component({
  selector: 'app-single-champion',
  templateUrl: './single-champion.component.html',
  styleUrls: ['./single-champion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleChampionComponent {
  @Input() champion!: Champion;
  @Input() index!: number;
}

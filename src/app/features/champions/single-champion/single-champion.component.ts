import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../../../models/champion-response';

@Component({
  selector: 'app-single-champion',
  templateUrl: './single-champion.component.html',
  styleUrls: ['./single-champion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleChampionComponent {
  @Input() champion!: Champion;
  @Input() index!: number;

  constructor(private router: Router) {}

  onChampionClick(championID: string) {
    this.router.navigate(['/champions', championID]);
  }
}

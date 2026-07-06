import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FreeChampion, RotationService } from '@services/rotation.service';
import { LoadingComponent, TitleComponent } from '@shared/components';

@Component({
  selector: 'app-champion-rotations',
  templateUrl: './champion-rotations.component.html',
  styleUrls: ['./champion-rotations.component.scss'],
  imports: [TitleComponent, LoadingComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChampionRotationsComponent implements OnInit {
  constructor(private champRotations: RotationService) {}

  champion: FreeChampion[] | null;
  isError = false;

  ngOnInit(): void {
    if (this.champRotations.freeChampion.length) {
      this.champion = this.champRotations.freeChampion;
    } else {
      this.champRotations.getFreeChampionIDs().subscribe({
        next: (data) => {
          this.champion = data;
        },
        error: () => {
          this.champion = null;
          this.isError = true;
        },
      });
    }
  }
}

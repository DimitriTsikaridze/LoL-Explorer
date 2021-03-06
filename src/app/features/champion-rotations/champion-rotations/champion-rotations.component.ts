import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FreeChampion, RotationService } from '@services/rotation.service';

@Component({
  selector: 'app-champion-rotations',
  templateUrl: './champion-rotations.component.html',
  styleUrls: ['./champion-rotations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChampionRotationsComponent implements OnInit {
  constructor(
    private champRotations: RotationService,
    private titleService: Title
  ) {}

  champion!: FreeChampion[] | null;
  isError = false;

  ngOnInit(): void {
    this.titleService.setTitle('Champion Rotations');
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

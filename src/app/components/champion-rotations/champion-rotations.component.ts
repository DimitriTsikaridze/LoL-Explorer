import { Component, OnInit } from '@angular/core';
import { RotationService } from './services/rotation.service';

@Component({
  selector: 'app-champion-rotations',
  templateUrl: './champion-rotations.component.html',
  styleUrls: ['./champion-rotations.component.scss'],
})
export class ChampionRotationsComponent implements OnInit {
  constructor(private champRotations: RotationService) {}

  champion!: any;
  isError = false;

  ngOnInit(): void {
    if (this.champRotations.freeChampion.length) {
      this.champion = this.champRotations.freeChampion;
    } else {
      this.champRotations.getFreeChampionIDs().subscribe({
        next: (data) => (this.champion = data),
        error: () => {
          this.champion = null;
          this.isError = true;
        },
      });
    }
  }
}

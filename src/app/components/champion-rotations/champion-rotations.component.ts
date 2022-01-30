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

  ngOnInit(): void {
    if (this.champRotations.freeChampion.length) {
      this.champion = this.champRotations.freeChampion;
    } else {
      this.champRotations
        .getFreeChampionIDs()
        .subscribe((data) => (this.champion = data));
    }
  }
}

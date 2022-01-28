import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RotationService } from './services/rotation.service';

@Component({
  selector: 'app-champion-rotations',
  templateUrl: './champion-rotations.component.html',
  styleUrls: ['./champion-rotations.component.scss'],
})
export class ChampionRotationsComponent implements OnInit {
  constructor(private champRotations: RotationService) {}

  champion$!: Observable<any>;

  ngOnInit(): void {
    this.champion$ = this.champRotations.getFreeChampionIDs();
  }
}

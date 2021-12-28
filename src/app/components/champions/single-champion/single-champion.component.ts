import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../../../models/champion-response';

@Component({
  selector: 'app-single-champion',
  templateUrl: './single-champion.component.html',
  styleUrls: ['./single-champion.component.scss'],
})
export class SingleChampionComponent implements OnInit {
  @Input() champion!: Champion;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onChampionClick(championID: string) {
    this.router.navigate(['/champions', championID]);
  }
}

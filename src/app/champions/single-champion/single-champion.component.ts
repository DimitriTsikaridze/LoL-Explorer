import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../../models/champion-response';

@Component({
  selector: 'app-single-champion',
  templateUrl: './single-champion.component.html',
  styleUrls: ['./single-champion.component.scss'],
})
export class SingleChampionComponent implements OnInit {
  @Input() champion!: Champion;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onChampionClick(championID: string) {
    console.table(this.champion);
  }
}

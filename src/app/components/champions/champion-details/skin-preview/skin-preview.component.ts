import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skin } from '../models/champion-details';

@Component({
  selector: 'app-skin-preview',
  templateUrl: './skin-preview.component.html',
  styleUrls: ['./skin-preview.component.scss'],
})
export class SkinPreviewComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public skin: Skin) {}

  ngOnInit(): void {}
}

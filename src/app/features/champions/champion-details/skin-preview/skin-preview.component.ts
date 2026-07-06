import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-skin-preview',
  templateUrl: './skin-preview.component.html',
  styleUrls: ['./skin-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinPreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  skinURL = this.data.skin.url;

  isSplash = true;

  loadSplash() {
    this.skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${this.data.key}/${this.data.skin.id}.jpg`;
    this.isSplash = true;
  }

  loadCentered() {
    this.skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${this.data.key}/${this.data.skin.id}.jpg`;
    this.isSplash = false;
  }
}

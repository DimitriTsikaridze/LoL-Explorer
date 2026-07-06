import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitleComponent } from '@shared/components';

@Component({
  selector: 'app-skin-preview',
  templateUrl: './skin-preview.component.html',
  imports: [TitleComponent],
  styleUrls: ['./skin-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinPreviewComponent {
  data = inject(MAT_DIALOG_DATA);

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

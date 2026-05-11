import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 [style.margin]="margin()">
      <ng-content />
    </h1>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  readonly title = input('Default Title');
  readonly margin = input('2rem 0');
}

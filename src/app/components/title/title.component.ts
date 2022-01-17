import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title!: string;
}

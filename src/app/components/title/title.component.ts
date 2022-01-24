import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div>
      <h1 class="animate__animated animate__fadeInDown">{{ title }}</h1>
    </div>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title!: string;
}

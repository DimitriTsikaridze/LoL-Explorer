import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div>
      <h1
        [ngStyle]="{ margin: margin }"
        class="animate__animated animate__fadeInDown"
      >
        <ng-content></ng-content>
      </h1>
    </div>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title = 'Default Title';
  @Input() margin = '2rem 0';
}

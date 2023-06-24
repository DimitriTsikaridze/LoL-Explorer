import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 [ngStyle]="{ margin: margin }">
      <ng-content />
    </h1>
  `,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TitleComponent {
  @Input() title = 'Default Title';
  @Input() margin = '2rem 0';
}

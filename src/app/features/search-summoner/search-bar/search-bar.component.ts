import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  imports: [ReactiveFormsModule, NgStyle],
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() valueControl = new UntypedFormControl();
  @Input() maxWidth: number = 540;
  @Input() placeHolder = 'Default Text';

  @Output() clickEvent = new EventEmitter();
}

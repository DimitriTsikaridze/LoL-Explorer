import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() valueControl = new UntypedFormControl();
  @Input() maxWidth: number = 540;
  @Input() placeHolder = 'Default Text';

  @Output() clickEvent = new EventEmitter();
}

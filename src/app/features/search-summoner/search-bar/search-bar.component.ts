import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { UntypedFormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

  searchIcon = faSearch;

  @Output() clickEvent = new EventEmitter();
}

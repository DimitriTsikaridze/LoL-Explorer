import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, throttleTime } from 'rxjs';

@Directive({
  selector: '[appThrottleClick]',
})
export class ThrottleClickDirective implements OnInit, OnDestroy {
  @Output() throttledClick = new EventEmitter();
  @Input() throttleTime = 2000;

  private clicks = new Subject<MouseEvent>();
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.clicks
      .pipe(throttleTime(this.throttleTime))
      .subscribe((e) => {
        this.throttledClick.emit(e);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.clicks.next(event);
  }
}

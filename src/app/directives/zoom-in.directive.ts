import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]',
})
export class ZoomInDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover', ['$event'])
  zoomIn(event: MouseEvent) {
    this.el.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener('mouseout', ['$event'])
  zoomOut(event: MouseEvent) {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}

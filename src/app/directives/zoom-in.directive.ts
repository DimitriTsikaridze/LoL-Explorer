import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]',
})
export class ZoomInDirective {
  @HostBinding('style.transform') scale!: string;

  @HostListener('mouseover', ['$event'])
  zoomIn() {
    this.scale = 'scale(1.08)';
  }

  @HostListener('mouseout', ['$event'])
  zoomOut() {
    this.scale = 'scale(1.00)';
  }
}

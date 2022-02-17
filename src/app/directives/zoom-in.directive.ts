import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomIn]',
})
export class ZoomInDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover', ['$event'])
  zoomIn() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
  }

  @HostListener('mouseout', ['$event'])
  zoomOut() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}

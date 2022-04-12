import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ZoomInDirective } from './directives/zoom-in.directive';
import { ThrottleClickDirective } from './directives/throttle-click.directive';
import { ShortTextPipe } from './pipes/short-text.pipe';

const components = [TitleComponent];

const directives = [ZoomInDirective, ThrottleClickDirective];

const pipes = [ShortTextPipe];

@NgModule({
  declarations: [components, directives, pipes],
  imports: [CommonModule],
  exports: [components, directives, pipes],
})
export class SharedModule {}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  standalone: true,
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string, args: number) {
    const words = value.split(' ');
    return `${words.slice(0, args).join(' ')}...`;
  }
}

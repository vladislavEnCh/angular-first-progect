import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show',
})
export class ShowPipe implements PipeTransform {
  transform(value: number | string, add: string): string {
    return `${value}${add}`;
  }
}

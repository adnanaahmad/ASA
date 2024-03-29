import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcaseToWord'
})
export class CamelcaseToWordPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value
      .replace(/^[a-z]/g, char => ` ${char.toUpperCase()}`)
      .replace(/[A-Z]|[0-9]+/g, ' $&')
      .replace(/(?:\s+)/, char => '');
  }

}

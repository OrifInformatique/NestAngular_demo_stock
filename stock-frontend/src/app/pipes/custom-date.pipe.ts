import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string | Date | null, ...args: unknown[]): unknown {
    if (value === null) {
      return '-';
    }

    if (value === '1899-11-29T23:50:39.000Z') {
      return '-';
    } else {
      return new Date(value).toLocaleDateString('fr-CH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    }
  }
}

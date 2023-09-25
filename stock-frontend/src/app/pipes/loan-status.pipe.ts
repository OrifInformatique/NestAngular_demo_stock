import { Pipe, PipeTransform } from '@angular/core';
import { LoanModel } from '../models/loan-model';

@Pipe({
  name: 'loanStatus'
})
export class LoanStatusPipe implements PipeTransform {

  transform(currentLoan: LoanModel | null): { value: string, htmlClass: string } {
    let htmlClass: string = 'badge ';
    let value: string = '';

    if (currentLoan !== null) {
      let end: Date;

      if (currentLoan.planned_return_date !== null) {
        end = new Date(currentLoan.planned_return_date);
      } else {
        end = new Date(currentLoan.date);
        end.setMonth(end.getMonth() + 3);
      }

      const now = new Date();
      now.setHours(0, 0, 0, 0);

      if (end < now) {
        htmlClass += 'bg-danger';
        value = 'Prêt en retard';
      } else {
        htmlClass += 'bg-warning';
        value = 'En prêt';
      }
    } else {
      htmlClass += 'bg-success';
      value = 'Pas de prêt en cours';
    }

    return {value, htmlClass};
  }

}

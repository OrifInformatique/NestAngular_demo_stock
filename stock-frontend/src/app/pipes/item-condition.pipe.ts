import { Pipe, PipeTransform } from '@angular/core';
import { ItemConditionModel } from '../models/item-condition-model';

@Pipe({
  name: 'itemCondition'
})
export class ItemConditionPipe implements PipeTransform {

  transform(itemCondition: ItemConditionModel): { value: string, htmlClass: string } {
    let value: string = itemCondition.name;
    let htmlClass: string = 'badge ';

    switch(itemCondition.item_condition_id) {
      case 10:
        htmlClass = htmlClass + 'bg-success';
        break;
      
      case 30:
        htmlClass = htmlClass + 'bg-warning';
        break;

      case 40:
        htmlClass = htmlClass + 'bg-danger';
        break;

      default:
        break;
    }

    return {value, htmlClass};
  }

}

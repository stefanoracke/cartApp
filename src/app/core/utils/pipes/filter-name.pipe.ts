import { Pipe, PipeTransform } from '@angular/core';
import { ProductI } from '../../models/product.interface';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: ProductI[] | null, text:string): any[] | null {
    if(value != null){
    return value.filter(item => item.name.toUpperCase().includes(text.toUpperCase()));}
    else{
      return value
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idfilter'
})
export class IdfilterPipe implements PipeTransform {

  transform(value: string | undefined): any {
    if (value!= undefined){ let n = value.length

    if(n > 7){
      let newString = value?.slice(0,6) + '...'
      return newString
    }
    else return value
    }
    return null;
  }

}

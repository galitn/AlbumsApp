import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDots',
})
export class ThreeDotsPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }
    if(value.length < 25){
      return value;
    }
    return value.substring(0,25)+'...';
  }
}

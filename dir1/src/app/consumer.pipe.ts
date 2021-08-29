import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consumer'
})
export class ConsumerPipe implements PipeTransform {

  transform(value:number): number {
    let a=Math.sqrt(value);
    let b=Math.log10(a);
    return b;
  }

}

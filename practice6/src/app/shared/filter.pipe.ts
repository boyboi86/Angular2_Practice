import { Pipe, PipeTransform } from '@angular/core';
// if you have a pure: true the pipe will be sync but if false it becomes async
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length === 0){
      return value;
    }
    let resultArray = [];
    for (let item of value){
      if(item.match(`^.*` + args + `.*$`)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

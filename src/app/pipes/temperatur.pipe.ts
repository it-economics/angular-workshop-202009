import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatur'
})
export class TemperaturPipe implements PipeTransform {

  transform(value: string, type?: string): string {
    if (type === "C") {
      return value + "°C";
    } else {
      return value + "°F";
    }
  }

}

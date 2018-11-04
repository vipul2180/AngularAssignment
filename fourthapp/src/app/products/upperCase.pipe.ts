import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mypipe'
})

export class MyUpper implements PipeTransform {
    transform(value: String, type: String) {
        if (type === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}

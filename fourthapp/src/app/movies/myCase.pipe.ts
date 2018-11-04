import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myCasePipe'
})

export class myCase implements PipeTransform{
    transform(value: string, type: string){
        if(type === 'upper'){
            value = value.toUpperCase();
        }
        else if (type === 'lower'){
            value = value.toLowerCase();
        }
        else{
           value = value.toString();
           value = value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        return value;
    }
}
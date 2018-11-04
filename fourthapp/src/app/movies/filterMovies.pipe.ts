import { Pipe, PipeTransform} from '@angular/core';
import { InterfMovies } from './movies';
@Pipe({
    name: 'filterMoviesPipe'
})

export class FilterMovies implements PipeTransform{
    transform(value: InterfMovies[], filterBy: string){
        filterBy = filterBy ? filterBy.toLowerCase(): null;

        return filterBy ? value.filter((movies: InterfMovies) => 
         (movies.name.toLowerCase().indexOf(filterBy) !==-1
        ||movies.type.toLowerCase().indexOf(filterBy) !== -1)):value;
    }
}
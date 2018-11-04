import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { myCase } from './myCase.pipe';
import { FilterMovies } from './filterMovies.pipe';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [SharedModule,
         RouterModule.forChild([           
            {path: 'movies', component: MoviesComponent},          
        ]),
           ],

  declarations: [
    MoviesComponent,
    myCase,
    FilterMovies
  ],

  providers: []
})

export class MoviesModule {

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesComponent } from './movies/movies.component';
import { myCase } from './movies/myCase.pipe';

import { FilterMovies } from './movies/filterMovies.pipe';

import { MusicComponent } from './music/music.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music/music.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './orders/order.component';
import { ProductModule } from './products/product.module';
import { MoviesModule } from './movies/movies.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
    MusicComponent,
    NotFoundComponent,   
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'orders', component: OrderComponent},
      {path: 'movies', component: MoviesComponent},      
      {path: 'music', component: MusicComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent},
  ]),
  ProductModule,
  MoviesModule
  ],
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

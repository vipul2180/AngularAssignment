import {Component} from '@angular/core';


@Component({
    //will be template in app.component.ts
   selector: 'app-movies',   
   templateUrl: './movies.component.html',
   styleUrls: ['./movies.component.css']
})

export class MoviesComponent{
     title: string = 'Movies List';
     showImage: boolean = false;
     filteredText: string;
     imageWidth: number = 50;
      movies: any[] = [
        {'_id':'5ab12612f36d2879268f284a'
        ,'name':'Black Panther'
        ,'language':'ENGLISH'        
        ,'type':'Action Adventure Fantasy'
        ,'rate':4.5
        ,'releaseDate': 'January 29, 2018'
        ,'income': 10000000000
        ,'tktPrice': 20
        ,'imageUrl':'https://image.ibb.co/f0hhZc/bp.jpg'
      },
      {'_id':'5ab12666f36d2879268f2902'
      ,'name':'Death Wish'
      ,'language':'ENGLISH'
      ,'type':'Action Crime Thriller'
      ,'rate':3.2
      ,'releaseDate': 'March 6, 2018'
      ,'income': 13010267
      ,'tktPrice': 20
      ,'imageUrl':'https://image.ibb.co/gC9PfH/dw.jpg'
      },
      {'_id':'5ab12678f36d2879268f291d'
      ,'name':'Coco'
      ,'language':'ENGLISH'
      ,'type':'Adventure Animation Family'
      ,'rate':5
      ,'releaseDate': 'October 27, 2017'
      ,'income': 23000000
      ,'tktPrice': 20
      ,'imageUrl':'https://image.ibb.co/dQwWSx/coco.jpg'
      },
      {'_id':'5ab126b6f36d2879268f2943'
      ,'name':'Avengers'
      ,'language':'ENGLISH'
      ,'type':'Action'
      ,'rate':2
      ,'releaseDate': 'April 27, 2018'
      ,'income': 23400000
      ,'tktPrice': 20
      ,'imageUrl':'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg'
      } 
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onDataReceive(message: string): void{
     this.title = 'Movie List >>>> ' + message;
  }
     
}

/*
  Binding:
  One way binding:
    Data Binding or Interpolation    - {{ }}
    Property Binding - []
    Event Binding    - ()
  Two way binding: [( )]  -- banana bracket
*/

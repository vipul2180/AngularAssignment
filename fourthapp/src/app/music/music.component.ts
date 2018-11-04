import { Component, OnInit} from '@angular/core';
import { Imusic } from './music';
import { MusicService} from './music.service';

@Component({
  selector: 'app-music',
  templateUrl:'./music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit{
    showAlbums: boolean = false;  
    currentArtistId: string;
    selectedIndex: number = -1;
    music: Imusic[]; 

    constructor(private _musicService: MusicService){}

    ngOnInit(): void{
     // this.music=this._musicService.getMusic()

     // Observable
     this._musicService.getMusic()
      .subscribe((data) => this.music = data);

     // On Promise
     /*
       this._musicService.getMusic()
      .then((data) => this.music = data);
    */
    }
        
        toggleAlbums():void{
          this.showAlbums = !this.showAlbums;
          
        }
       
    }  
    
    
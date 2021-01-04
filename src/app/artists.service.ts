import { Injectable } from '@angular/core';
import { artists } from './data/data';

@Injectable({
  providedIn: 'root'

})
export class ArtistsService {

   artistName: ArtistInfo ;

  constructor() { }
      getArtists() {
       return artists;
       }

       setArtistName(artistInfo: ArtistInfo): void {

          this.artistName = artistInfo;
          // this.artistName.name = 'venkat';
       }
}

export class ArtistInfo {

   name: string;
}

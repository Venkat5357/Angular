import { Component, OnInit } from '@angular/core';
import { ArtistInfo } from '../artists.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  artistName: ArtistInfo;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {

    this.artistName = this.tokenService.userInfo;
  }

}

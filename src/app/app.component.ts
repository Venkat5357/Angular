import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-playground-app';

  dashBoardUrl;

  userInfo: any;

  constructor(private tokenService: TokenService,
              private sanitizer: DomSanitizer, private http: HttpClient) {

    console.log('app component..');
  }
  ngOnInit(): void {

     this.dashBoardUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://kissht.com');


     this.userInfo = this.tokenService.userInfo;


  }

}

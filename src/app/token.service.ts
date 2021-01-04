import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  userInfo: any;

  constructor(private httpClient: HttpClient) { }

  initializeApp() {

    console.log('initialize app');
  }


  getSettings(): Promise<any> {

    const promise = this.httpClient.get('http://localhost:3000/userInfo').toPromise()
    .then(settings => {
      console.log(`Settings from API: `, settings);

      this.userInfo = settings;

      return settings;
    });

    return promise;
  }


}

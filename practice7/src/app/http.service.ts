import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
/*The ending must include json so that firebase can communicate*/
getData(){
  return this.http.get('https://angular2-test-f23ee.firebaseio.com/title.json')
}

}

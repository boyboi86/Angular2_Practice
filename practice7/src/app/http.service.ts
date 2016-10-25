import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
/*The ending must include json so that firebase can communicate*/
getData(){
  return this.http.get('https://angular2-test-f23ee.firebaseio.com/title.json')
                  .map((response: Response) => response.json());
}

}

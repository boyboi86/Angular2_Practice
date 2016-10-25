import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
/*The ending must include json so that firebase can communicate*/
  getData(){
    return this.http.get('https://angular2-test-f23ee.firebaseio.com/title.json')
                    .map((response: Response) => response.json());
  }

  sendData(user: any){
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('https://angular2-test-f23ee.firebaseio.com/data.json', body, {
      headers: headers
    })
    .map((response: Response) => response.json());
  }
  retrieveData(){
    return this.http.get('https://angular2-test-f23ee.firebaseio.com/data.json')
                    .map((response: Response) => response.json());
  }
}

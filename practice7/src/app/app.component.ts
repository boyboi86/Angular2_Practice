import { Component, OnInit } from '@angular/core';
// import { Response } from '@angular/http';

import { HttpService } from './http.service';
// import { subscribe } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  instructions = this.httpService.getData();
  items: any[];
  constructor(private httpService: HttpService) {}

  ngOnInit(){
    this.httpService.getData()
                    .subscribe((data: any) => {
                      console.log(data)
                    })
  }

  onSubmit(username: string, email: string){
    this.httpService.sendData({username, email})
                    .subscribe((data: any) => {
                      console.log(data)
                    })
  }
  onGetOwnData(){
    this.httpService.retrieveData()
                    .subscribe(
                      data => {
                        const newArr = [];
                        for(let key in data){
                          newArr.push(data[key])
                        }
                        this.items = newArr;
                      }
                    )
  }
}

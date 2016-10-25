import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from './http.service';
// import { subscribe } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  instructions = "kindly refer to developer console if you are using chrome, you will see a call has been made called 'Response'"
  constructor(private httpService: HttpService) {}

  ngOnInit(){
    this.httpService.getData()
                    .subscribe((data: Response) => {
                      console.log(data)
                    })
  }
}

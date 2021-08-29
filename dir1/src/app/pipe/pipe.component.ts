import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

 
  name = "welcome";
 message = "";
 date = new Date();
 person = { 
  "firstName": "saro",
  "lastName": "pavi"
}
  constructor() { }

  ngOnInit(): void {
  }

}

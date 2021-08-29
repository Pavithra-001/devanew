import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  title = 'Directive';
  display = false;
  username ="gowthu";
   users = [
     {name:"pavi", id:"01", age:"20"},
     {name:"saro", id:"02", age:"21"},
     {name:"renu", id:"03", age:"22"},
     {name:"chandra", id:"04", age:"23"},
     {name:"bakku",id:"05", age:"24"}
   ];
  constructor() { }

  ngOnInit(): void {
  }

}

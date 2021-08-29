import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
 
  title="Pavithra"
  visible=true;
  entername="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    alert('success')
  }

}

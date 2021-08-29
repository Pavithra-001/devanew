import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private food:DataService) { }

    
 fruits()
 {
   let my=this.food.orderFruits();
   console.log(my);
 }
 drinks()
 {
   let my=this.food.orderDrinks();
   console.log(my)
 }


  ngOnInit(): void {
  }

}

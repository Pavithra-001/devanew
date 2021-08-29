import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  drinks: any="MilkShake";
  fruits: any="apple";

  constructor() { }
  orderDrinks()
  {
    return this.drinks;
  }

  orderFruits()
  {
    return this.fruits;
  }
}

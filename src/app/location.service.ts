import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
   tableBottom: number;
   tableLeft: number;

  constructor() { }

  // this service should calc locations. make sure elevators start in correct place (g floor of each column)
  // make sure every elevator change starts and finishes nicely on the correct floor.


  calcTableLocation(): void{
    const table = document.querySelector('table');
    const rect = table.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    this.tableLeft = rect.left;
    this.tableBottom = 120; // works only on the laptop screen. should be generic according to table location
  }
}

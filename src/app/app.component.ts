import {AfterContentInit, AfterViewInit, Component} from '@angular/core';
import {ElevatorLogicService} from './elevator-logic.service';
import {LocationService} from './location.service';
import {Elevator} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'arbox-elevator';
  buildingFloors: Array<object> = [ // adi make this generic
                                    // make the floors a number (I use it in find closest)
    // and maybe switch case a name. everything over 3 ends in th.
    {name: '6th'},
    {name: '5th'},
    {name: '4th'},
    {name: '3rd'},
    {name: '2nd'},
    {name: '1st'},
    {name: 'ground'},
  ];


  displayedColumns: string[] = ['name', 'el1', 'el2', 'el3', 'button'];
  // use my elevators. I want a column for name and button, and elevatorNum


  elevators;

  ngAfterViewInit(): void {
    LocationService.prototype.calcTableLocation();
    this.elevators = [...this.initElevators()];

  }


  initElevators(): Map<number, Elevator> {// adi make this generic
    this.elevators = new Map([
      [0, new Elevator(0)],
      [1, new Elevator(1)],
      [2, new Elevator(2)]
    ]);
    return this.elevators;
  }


}






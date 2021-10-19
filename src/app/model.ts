import {AppComponent} from './app.component';
import {LocationService} from './location.service';

export class Model {
}

export enum buttonState {
  available = 'AVAILABLE', waiting = 'WAITING', arrived = 'ARRIVED'
}

export enum elevatorState {
  available = 'AVAILABLE', occupied = 'OCCUPIED', arrived = 'ARRIVED'
}

export class Elevator { // does it make sense to build this class here? what is the correct place
  id: number;
  state: elevatorState;
  currentFloor: number;
  destFloor: number;
  tripDuration: number;
  leftLocation: number;
  bottomLocation: number;


  constructor(id) {
    this.id = id;
    this.state = elevatorState.available;
    this.currentFloor = 0;
    this.destFloor = null;
    this.tripDuration = null;
    this.calcLocation();
  }

  setOccupied(newFloor): void {
    this.destFloor = newFloor;
    this.state = elevatorState.occupied;
    // this.tripDuration - start counting. remember the time now. and check it on finish
  }

  calcLocation(): void{
    const startLeft = LocationService.prototype.tableLeft + 100; // name column
    const startBottom = LocationService.prototype.tableBottom;
    const interval = 52;

    this.leftLocation = startLeft + interval * this.id + 10;
    this.bottomLocation = startBottom + 10;
    console.log(`adi elevator id ${this.id} and its left location is ${this.leftLocation}`);
    // the location is not correct. works fine on the laptop, but if I change to the big screen it moves.
    // expected: generic location according to table and td size.
  }


  /*

  on finish moving
  1. set state to arrived
  2. finish calculating duration
  3. update current floor + dest floor
  4. sound the ding
  5. clear dest
  6. wait 2 seconds

  //don't forget to update the button too.

   */
}



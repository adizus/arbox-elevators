import {Injectable} from '@angular/core';
import {Elevator} from './model';
import {AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ElevatorLogicService {
  private setClosest: (elevator, distance) => void;

  // elevators = new Map<number, Elevator>{}; //where should the elevators list actually be created?


  // constructor() {
  //   this.elevators.set(0, new Elevator(0));
  //   this.elevators.set(1, new Elevator(1));
  //   this.elevators.set(2, new Elevator(2));
  // }

  callElevator(newFloor): void {
    // how not to miss calls? they suggested que.
    const elevators = AppComponent.prototype.elevators;
    console.log('adi called elevator', newFloor);
    console.log('adi elevator map', elevators); // why is elevators empty?
    const closestElevator = this.findClosest(elevators, newFloor);
    closestElevator.setOccupied(newFloor);
  }

  findClosest(elevators, newFloor): Elevator {
    console.log('adi in find closest', {elevators});
    this.setClosest = (elevator, distance) => {
      closestElevatorId = elevator.id;
      closestDistance = distance;
    };

    let closestElevatorId = null;
    let closestDistance = null;
    elevators.forEach((elevator: Elevator) => {
      const distance = this.calcDistance(elevator, newFloor);
      if (distance === 0) {
        return elevator;
      }
      if (!closestElevatorId || closestDistance > distance) {
        this.setClosest(elevator, distance);
      }
    })
    return elevators(closestElevatorId);
  }


  calcDistance(elevator, newFloor): number {
    const current = elevator.destFloor ? elevator.destFloor : elevator.currentFloor;
    return Math.abs(current - newFloor);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Elevator} from '../model';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.css']
})
export class ElevatorComponent implements OnInit {
@Input() elevatorObj: {id, Elevator};

elevator;



  constructor() {
  }

  ngOnInit(): void {
    console.log('Adi test 1 ', this.elevatorObj);
    console.log('Adi test 2 ', this.elevatorObj[1]);
    this.elevator = this.elevatorObj[1];
  }

  // learn how to use angular animate. see example of open-close in the docs.
  // will need a trigger + start and end.
  // make the time for animation dependent on the distance the floor will move.
  // (moving 1 floor should take 50% of moving 2 floors)












}

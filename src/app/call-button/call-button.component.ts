import {Component, Input, OnInit} from '@angular/core';
import {buttonState} from '../model';
import {ElevatorLogicService} from '../elevator-logic.service';


@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  styleUrls: ['./call-button.component.css']
})
export class CallButtonComponent implements OnInit {
  @Input() floor: number;
  @Input() state: buttonState;

  constructor(private service: ElevatorLogicService) {
    this.state = buttonState.available;

  }


  ngOnInit()
    :
    void {
  }


  setButtonState(newState): void {
    this.state = newState;
  }


  call(): void {
    this.setButtonState(buttonState.waiting);
    console.log('Adi in call button', this.floor, this.state);
    this.service.callElevator(this.floor);
  }


}

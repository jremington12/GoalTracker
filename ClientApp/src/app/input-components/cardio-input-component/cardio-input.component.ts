import { Component } from '@angular/core';

@Component({
  selector: 'cardio-input',
  template: `<input type="number" class="form-control" [(ngModel)]="hours" placeholder="Hours run" aria-label="Username" aria-describedby="basic-addon1">
  <input type="number" class="form-control" [(ngModel)]="minutes" placeholder="Minutes Run" aria-label="Username" aria-describedby="basic-addon1">
  <input type="number" class="form-control" [(ngModel)]="seconds" placeholder="Seconds Run" aria-label="Username" aria-describedby="basic-addon1">
  <input type="number" class="form-control" [(ngModel)]="distance" placeholder="Distance Run" aria-label="Username" aria-describedby="basic-addon1">`
})

export class CardioInputComponent {
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;

  public returnData(): any{
    let newObject: any = ({
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
      distance: this.distance
    })
    return newObject;
  }
}

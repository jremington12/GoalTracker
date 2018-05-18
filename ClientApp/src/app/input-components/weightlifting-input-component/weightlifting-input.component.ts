import { Component } from '@angular/core';

@Component({
  selector: 'weight-lifting-input',
  template: `<input type="text" class="form-control" [(ngModel)]="type" placeholder="Exercize" aria-label="Username" aria-describedby="basic-addon1">
  <input type="number" class="form-control" [(ngModel)]="weight" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1">
  <input type="number" class="form-control" [(ngModel)]="reps" placeholder="Reps" aria-label="Username" aria-describedby="basic-addon1">
  <input type="number" class="form-control" [(ngModel)]="sets" placeholder="Sets" aria-label="Username" aria-describedby="basic-addon1">`
})

export class WeightliftingInputComponent {
  type: string;
  weight: number;
  reps: number;
  sets: number;

  public returnData(): any{
    let newObject: any = ({
      type: this.type,
        weight: this.weight,
        reps: this.reps,
        sets: this.sets
    })
    return newObject;
  }
}

import {Component, OnInit} from '@angular/core';
import {WeightLiftingExercise, WeightLiftingLog} from "../../models/weight-lifting-log-model";
import {FormArray, FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AbstractControlOptions} from "@angular/forms/src/model";

@Component({
  selector: 'weight-lifting-input',
  template: `    
    <!--div *ngFor="let e of exercises">
      <input type="text" class="form-control" [(ngModel)]="e.Name" placeholder="Exercise Name" aria-label="Username" aria-describedby="basic-addon1">
      <input type="number" class="form-control" [(ngModel)]="e.Weight" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1">
      <input type="number" class="form-control" [(ngModel)]="e.Reps" placeholder="Reps" aria-label="Username" aria-describedby="basic-addon1">
      <input type="number" class="form-control" style="margin-bottom: 10px" [(ngModel)]="e.Sets" placeholder="Sets" aria-label="Username" aria-describedby="basic-addon1">
    </div>-->
    
    <form [formGroup]="weightLiftingLogForm">
      <fieldset formArrayName="exercises">
        <div *ngFor="let e of formData['controls']; let i = index">
          <form [formGroup]="e">
          <input type="text" class="form-control" [attr.id]="'exerciseName'+i" formControlName="Name" placeholder="Exercise Name" aria-label="Username" aria-describedby="basic-addon1">
            <input type="number" class="form-control" formControlName="Sets" placeholder="Sets" aria-label="Username" aria-describedby="basic-addon1">
            <input type="number" class="form-control" formControlName="Reps" placeholder="Reps" aria-label="Username" aria-describedby="basic-addon1">
            <input type="number" class="form-control" formControlName="Weight" style="margin-bottom: 10px" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1">
          </form>
        </div>
      </fieldset>
    </form>
    <button class="btn btn-primary" (click)="onClickedAddNewExercise()">Add New Exercise</button>
    <button class="btn btn-primary" style="background-color: red; border-color: red;" [disabled]="formData['controls'].length <= 1" (click)="onClickedRemoveExercise()">Remove Exercise</button>
  `
})

export class WeightliftingInputComponent implements OnInit {
  type: string;
  weight: number;
  reps: number;
  sets: number;
  formBuilder: FormBuilder = new FormBuilder();

  weightLiftingLogForm: FormGroup;

  get formData() {
    return this.weightLiftingLogForm.get('exercises');
  }

  exercises: Array<WeightLiftingExercise> = [new WeightLiftingExercise()];

  ngOnInit() {
    this.initializeForm();
  }

  public returnData(): any{
    let newObject: any = ({
      type: this.type,
        weight: this.weight,
        reps: this.reps,
        sets: this.sets
    })
    return newObject;
  }

  onClickedAddNewExercise(): void {
    this.formData['controls'].push(this.createNewExerciseGroup());
    console.log(this.weightLiftingLogForm);
  }

  getWeightLiftingLog(): WeightLiftingLog {
    let log: WeightLiftingLog = new WeightLiftingLog();
    let exercises = this.weightLiftingLogForm.get('exercises').value;

    log.Exercises = exercises;
    log.TotalSets = this.computeTotalSets(exercises);

    return log;
  }

  computeTotalSets(exercises: Array<WeightLiftingExercise>): number {
    let count = 0;
    exercises.forEach(x => {if(x.Sets != null) {count += x.Sets;}});

    return count;
  }

  private initializeForm(): void {
    let group: FormGroup = this.createNewExerciseGroup();

    this.weightLiftingLogForm = this.formBuilder.group({
      'exercises': this.formBuilder.array([group])
    });
  }

  private createNewExerciseGroup(): FormGroup {
    let group: FormGroup = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Sets': new FormControl(null, Validators.required),
      'Reps': new FormControl(null, Validators.required),
      'Weight': new FormControl(null, Validators.required)
    });

    return group;
  }

  onClickedRemoveExercise(): void {
    if (this.formData['controls'].length > 1) {
      this.formData['controls'].pop();
    }
  }
}

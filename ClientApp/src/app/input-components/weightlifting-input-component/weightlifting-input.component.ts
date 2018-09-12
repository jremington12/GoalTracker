import {Component, OnInit, Input} from '@angular/core';
import {WeightLiftingExercise, WeightLiftingLog} from "../../models/weight-lifting-log-model";
import {FormArray, FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AbstractControlOptions} from "@angular/forms/src/model";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'weight-lifting-input',
  template: `   
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
  @Input() weightLiftingLog: WeightLiftingLog;

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

  onClickedAddNewExercise(): void {
    let form = this.weightLiftingLogForm.get('exercises') as FormArray;
    form.push(this.createNewExerciseGroup());
  }

  getWeightLiftingLogForCreate(): WeightLiftingLog {
    let log: WeightLiftingLog = new WeightLiftingLog();
    let exercises = this.weightLiftingLogForm.get('exercises').value;

    log.Exercises = exercises;
    log.TotalSets = this.computeTotalSets(exercises);

    return log;
  }

  getWeightLiftingLogForUpdate(): WeightLiftingLog {
    let log: WeightLiftingLog = this.weightLiftingLog;

    let newExercises = (<Array<WeightLiftingExercise>>this.weightLiftingLogForm.get('exercises').value);//.find(e => e.WeightLiftingExerciseId == x.WeightLiftingExerciseId);

    newExercises.forEach((exercise, index) => {
      if (index+1 > log.Exercises.length) {
        log.Exercises.push(new WeightLiftingExercise());
      }

      log.Exercises[index].Name = exercise.Name;
      log.Exercises[index].Reps = exercise.Reps;
      log.Exercises[index].Weight = exercise.Weight;
      log.Exercises[index].Sets = exercise.Sets;
    });

    log.TotalSets = this.computeTotalSets(log.Exercises);

    return log;
  }

  computeTotalSets(exercises: Array<WeightLiftingExercise>): number {
    let count = 0;
    exercises.forEach(x => {if(x.Sets != null) {count += x.Sets;}});

    return count;
  }

  private initializeForm(): void {
    let group: Array<FormGroup> = [];

    if (this.weightLiftingLog) {
      group = this.createNewExerciseGroupFromExisting(this.weightLiftingLog)
    } else {
      group.push(this.createNewExerciseGroup());
    }

    this.weightLiftingLogForm = this.formBuilder.group({
      'exercises': this.formBuilder.array(group)
    });
  }

  private createNewExerciseGroup(): FormGroup {
    let group: FormGroup = new FormGroup({
      'Name': new FormControl(   null, Validators.required),
      'Sets': new FormControl(null, Validators.required),
      'Reps': new FormControl(null, Validators.required),
      'Weight': new FormControl(null, Validators.required)
    });

    return group;
  }

  private createNewExerciseGroupFromExisting(weightLiftingLog: WeightLiftingLog): Array<FormGroup> {
    let group: Array<FormGroup> = [];

    weightLiftingLog.Exercises.forEach(x => {
      group.push(
        new FormGroup({
          'Name': new FormControl(x.Name, Validators.required),
          'Sets': new FormControl(x.Sets, Validators.required),
          'Reps': new FormControl(x.Reps, Validators.required),
          'Weight': new FormControl(x.Weight, Validators.required)
        })
      )
    });

    return group;
  }

  onClickedRemoveExercise(): void {
    if (this.formData['controls'].length > 1) {
      this.formData['controls'].pop();
    }
  }
}

import {Component, Input} from "@angular/core";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";

@Component({
  selector: 'weight-lifting-log-display',
  styleUrls: [],
  template: `
    <div class="card">
      <div class="card-body">
        <div style="font-weight: bold">Weight Lifting Log: </div>
        <div>Created: {{weightLiftingLog.Date}}</div>
        <div>Total Sets: {{totalSets}}</div>
        <div *ngIf="weightLiftingLog && weightLiftingLog.Exercises && weightLiftingLog.Exercises.length > 0"><span style="font-weight: bold">Excercises: </span>
            <ng-container *ngFor="let e of weightLiftingLog.Exercises">
              <div>{{e.Name}}:</div>
              <div>Weight: {{e.Weight}}</div>
              <div>Sets: {{e.Sets}}</div>
              <div>Reps: {{e.Reps}}</div>
            </ng-container>
        </div>
      </div>
    </div>`
})

export class WeightLiftingLogDisplayComponent {
  @Input() weightLiftingLog: WeightLiftingLog = null;
  totalSets: number = null;

  ngOnInit() {
    console.log("WLL: ", this.weightLiftingLog);
    this.totalSets = this.weightLiftingLog.TotalSets;
    console.log("TS: ", this.totalSets);
  }
}



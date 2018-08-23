import {Component, Input} from "@angular/core";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {SubjectService} from "../Services/subject-service";
import {LogApiSubjectService} from "../Services/log-api-subject.service";

@Component({
  selector: 'weight-lifting-log-display',
  styleUrls: [],
  template: `
    <div class="card">
      <div class="card-body">
        <div style="font-weight: bold">Weight Lifting Log: </div>
        <div *ngIf="weightLiftingLog">
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
        <div *ngIf="!weightLiftingLog || weightLiftingLog.NoLog">No WeightLifting Logs Have Been Entered Today!</div>
      </div>
    </div>`
})

export class WeightLiftingLogDisplayComponent {
  @Input() weightLiftingLogs: Array<WeightLiftingLog> = [];
  weightLiftingLog: WeightLiftingLog = null;
  totalSets: number = null;
  isLoading = false;

  constructor(private apiSubject: LogApiSubjectService, private subject: SubjectService) {};

  ngOnInit() {
    this.initializeSubscriptions();
    this.isLoading = true;
    this.apiSubject.GetWeightLiftingLog();
  }

  onWeightLiftingLogsRetrieved(result: WeightLiftingLog) {
    console.log('result: ', result);

    this.isLoading = false;
    this.weightLiftingLog = result;
  }

  initializeSubscriptions(): void {
    this.subject.onWeightLiftingLogRetrieved.subscribe(result => this.onWeightLiftingLogsRetrieved(result));
  }
}



import {Component, OnInit} from '@angular/core';
import {WeightLiftingLog} from "../../models/weight-lifting-log-model";
import {LogApiSubjectService} from "../../Services/log-api-subject.service";
import {SubjectService} from "../../Services/subject-service";
import {LogType} from "../../models/log-base";

@Component({
  selector: 'current-logs',
  styleUrls: ['current-logs.component.css'],
  template: `<body>
                <div class="card current-logs-container"> 
                  <div class="card-header" style="font-weight: bold">Today's Logs:</div>
                  <div *ngFor="let log of logs">
                    <weight-lifting-log-display *ngIf="log.LogType == logType.WeightLiftingLog" [weightLiftingLog]="log"></weight-lifting-log-display>
                  </div>
                </div>
            </body>`
})
export class CurrentLogsComponent implements OnInit {
  public logs: Array<WeightLiftingLog> = [];
  public logType = LogType;

  constructor(private apiSubject: LogApiSubjectService, private subject: SubjectService ) {}

  ngOnInit() {
    this.initializeSubscriptions();
    this.apiSubject.GetWeightLiftingLog();
  }

  onWeightLiftingLogsRetrieved(result: Array<WeightLiftingLog>) {
    this.logs = result;
    console.log('got heem: ', this.logs);
    //result.forEach(x => this.logs.push(x));

    //this.logs.push(result[0]);
  }

  initializeSubscriptions(): void {
    this.subject.onWeightLiftingLogRetrieved.subscribe(result => this.onWeightLiftingLogsRetrieved(result));
  }
}




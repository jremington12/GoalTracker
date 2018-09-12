import {Component, OnInit} from '@angular/core';
import {WeightLiftingLog} from "../../models/weight-lifting-log-model";
import {LogApiSubjectService} from "../../Services/log-api-subject.service";
import {SubjectService} from "../../Services/subject-service";
import {LogType} from "../../models/log-base";
import {LogRecord} from "../../models/LogRecord";

@Component({
  selector: 'current-logs',
  styleUrls: ['current-logs.component.css'],
  template: `
                <div class="card current-logs-container"> 
                  <div class="card-header" style="font-weight: bold; color: white;">Today's Logs:</div>
                    <weight-lifting-log-display *ngIf="showWeightLiftingLogs"></weight-lifting-log-display>
                </div>
            `
})
export class CurrentLogsComponent implements OnInit {
  public logRecords: Array<LogRecord> = [];
  public logType = LogType;

  public showWeightLiftingLogs = false;
  public showCardioLogs = false;

  constructor(private apiSubject: LogApiSubjectService, private subject: SubjectService ) {}

  ngOnInit() {
    this.initializeSubscriptions();
    this.apiSubject.GetLogRecords();
  }

  onLogRecordsRetrieved(result: Array<LogRecord>) {
    this.logRecords = result;
    console.log('got heem: ', this.logRecords);

    this.initializeLogDisplays();
  }

  initializeLogDisplays(): void {
    if (!this.logRecords) {
      return;
    }

    this.showWeightLiftingLogs = this.logRecords.find(x => x.LogType == LogType.WeightLiftingLog) ? true : false;
    this.showCardioLogs = this.logRecords.find(x => x.LogType == LogType.CardioLog) ? true : false;
    console.log('show ', this.showWeightLiftingLogs);
  }

  initializeSubscriptions(): void {
    this.subject.onLogRecordsRetrieved.subscribe(result => this.onLogRecordsRetrieved(result));
  }
}




import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {LogApiSubjectService} from "../Services/log-api-subject.service";
import {SubjectService} from "../Services/subject-service";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {WeightliftingInputComponent} from "../input-components/weightlifting-input-component/weightlifting-input.component";
import {LogRecord} from "../models/LogRecord";
import {SharedApplicationStateService} from "../Services/shared-application-state.service";
import {forEach} from "@angular/router/src/utils/collection";
import {LogType} from "../models/log-base";

export interface ConfirmModel {
}

@Component({
  selector: 'begin-new-log-modal',
  styleUrls: [],
  template: `
    <body>
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Begin a New Log</h4>
        <button type="button" class="close" (click)="close()" >&times;</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="sel1">Select Log Type:</label>
          <select class="form-control" id="sel1" [(ngModel)]="choice">
            <option *ngIf="showWeightLiftingLog" value="0">Weight Lifting</option>
            <option *ngIf="showCardioLog" value="1">Cardio</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
      </div>
    </div>
  </div>
    </body>`
})


export class BeginNewLogModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  @ViewChild(WeightliftingInputComponent) weightLiftingInputComponent: WeightliftingInputComponent;

  @Input() logRecords: Array<LogRecord> = [];

  choice: any = -1;
  showWeightLiftingLog = false;
  showCardioLog = false;

  constructor(dialogService: DialogService, private apiSubject: LogApiSubjectService, private subject: SubjectService, private sas: SharedApplicationStateService) {
    super(dialogService);
  }

  ngOnInit() {
    console.log('log records: ', this.logRecords);

    this.initializeSubscriptions();
    this.initializePossibleLogRecords();
  }

  confirm() {
    let logRecord = new LogRecord();
    logRecord.LogType = this.choice;
    logRecord.UserId = this.sas.getUserId();
    logRecord.Deleted = false;
    this.apiSubject.CreateLogRecord(logRecord);
  }

  onLogRecordCreated(result: LogRecord): void {
    if (!result) {
      return;
    }

    this.result = true;
    this.close();
    this.subject.onLogRecordCreated.next(null);
  }

  initializePossibleLogRecords(): void {
    this.logRecords.forEach(lr => this.initializeLogRecord(lr));
  }

  initializeLogRecord(logRecord: LogRecord): void {
    switch (logRecord.LogType) {
      case LogType.WeightLiftingLog:
        this.showWeightLiftingLog = false
        return;
      case LogType.CardioLog:
        this.showCardioLog = false
        return;
      default:
        return;
    }
  }

  initializeSubscriptions(): void {
    this.subject.onLogRecordCreated.subscribe(r => this.onLogRecordCreated(r));
  }
}



import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {LogApiSubjectService} from "../Services/log-api-subject.service";
import {SubjectService} from "../Services/subject-service";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {WeightliftingInputComponent} from "../input-components/weightlifting-input-component/weightlifting-input.component";
import {LogRecord} from "../models/LogRecord";
import {SharedApplicationStateService} from "../Services/shared-application-state.service";

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
            <option value="0">Weight Lifting</option>
            <option value="1">Cardio</option>
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
  choice: any = -1;

  @ViewChild(WeightliftingInputComponent) weightLiftingInputComponent: WeightliftingInputComponent;

  constructor(dialogService: DialogService, private apiSubject: LogApiSubjectService, private subject: SubjectService, private sas: SharedApplicationStateService) {
    super(dialogService);
  }

  ngOnInit() {
    this.initializeSubscriptions();

  }

  confirm() {
    let logRecord = new LogRecord();
    logRecord.LogType = this.choice;
    logRecord.UserId = this.sas.getUserId();
    logRecord.Deleted = false;
    this.apiSubject.CreateLogRecord(logRecord);
  }

  onWeightLiftingLogCreated(result: WeightLiftingLog) {
    console.log('It worked for post!: ', result);
    this.apiSubject.GetWeightLiftingLog();
  }

  onWeightLiftingLogRetrieved(result: Array<WeightLiftingLog>) {
    console.log('It worked for get!: ', result);
  }

  initializeSubscriptions(): void {
    this.subject.onWeightLiftingLogCreated.subscribe(result => this.onWeightLiftingLogCreated(result));
    //this.subject.onWeightLiftingLogRetrieved.subscribe(result => this.onWeightLiftingLogRetrieved(result));
  }
}



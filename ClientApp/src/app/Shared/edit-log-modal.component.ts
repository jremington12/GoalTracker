import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {LogApiSubjectService} from "../Services/log-api-subject.service";
import {SubjectService} from "../Services/subject-service";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {WeightliftingInputComponent} from "../input-components/weightlifting-input-component/weightlifting-input.component";
import {Log, LogType} from "../models/log-base";

export interface ConfirmModel {
}
@Component({
  selector: 'edit-log-modal',
  styleUrls: [],
  template: `
    <body>
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Edit Log</h4>
        <button type="button" class="close" (click)="close()" >&times;</button>
      </div>
      <div class="modal-body">
        <weight-lifting-input *ngIf="logType == logTypeRef.WeightLiftingLog" [weightLiftingLog]="log"></weight-lifting-input>
        <cardio-input *ngIf="logType == logTypeRef.CardioLog"></cardio-input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="confirm()" [disabled]="">OK</button>
        <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
      </div>
    </div>
  </div>
    </body>`
})


export class EditLogModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  @Input() log: Log;
  @Input() logType: LogType;

  logTypeRef = LogType;

  @ViewChild(WeightliftingInputComponent) weightLiftingInputComponent: WeightliftingInputComponent;

  constructor(dialogService: DialogService, private apiSubject: LogApiSubjectService, private subject: SubjectService) {
    super(dialogService);
  }

  ngOnInit() {
    this.initializeSubscriptions();

  }

  confirm() {
    switch (this.logType) {
      case LogType.WeightLiftingLog:
        this.apiSubject.UpdateWeightLiftingLog(this.weightLiftingInputComponent.getWeightLiftingLogForUpdate());
        break;
      case LogType.CardioLog:
        break;
    }
  }

  onWeightLiftingLogUpdated(result: WeightLiftingLog) {
    if (!result) {
      return;
    }

    console.log('It worked for post!: ', result);
    this.apiSubject.GetWeightLiftingLog();
    this.subject.onWeightLiftingLogUpdated.next(null);
    this.dialogService.removeDialog(this);
  }

  onWeightLiftingLogRetrieved(result: Array<WeightLiftingLog>) {
    console.log('It worked for get!: ', result);
  }

  initializeSubscriptions(): void {
    this.subject.onWeightLiftingLogUpdated.subscribe(result => this.onWeightLiftingLogUpdated(result));
  }
}



import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {LogApiSubjectService} from "../Services/log-api-subject.service";
import {SubjectService} from "../Services/subject-service";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {WeightliftingInputComponent} from "../input-components/weightlifting-input-component/weightlifting-input.component";

export interface ConfirmModel {
}
@Component({
  selector: 'create-log-modal',
  styleUrls: [],
  template: `
    <body>
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Create a Log</h4>
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
        <weight-lifting-input *ngIf="choice == 0"></weight-lifting-input>
        <cardio-input *ngIf="choice == 1"></cardio-input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
      </div>
    </div>
  </div>
    </body>`
})


export class CreateLogModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  choice: any = -1;

  @ViewChild(WeightliftingInputComponent) weightLiftingInputComponent: WeightliftingInputComponent;

  constructor(dialogService: DialogService, private apiSubject: LogApiSubjectService, private subject: SubjectService) {
    super(dialogService);
  }

  ngOnInit() {
    this.initializeSubscriptions();

  }

  confirm() {
    switch (this.choice) {
      case '0':
        console.log(this.weightLiftingInputComponent.getWeightLiftingLog());
        this.apiSubject.CreateWeightLiftingLog(this.weightLiftingInputComponent.getWeightLiftingLog());
        this.dialogService.removeDialog(this);
        break;
      case 1:
        break;
    }
    //this.apiSubject.CreateWeightLiftingLog();
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
    this.subject.onWeightLiftingLogRetrieved.subscribe(result => this.onWeightLiftingLogRetrieved(result));
  }
}



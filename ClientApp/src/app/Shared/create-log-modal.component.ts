import { Component } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {LogSubectService} from "../Services/log-subect.service";

export enum LogTypes {
  WeightLifting = 1,
  Cardio = 2
}

export interface ConfirmModel {
  title:string;
  message:string;
  test: string;
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
            <option value="1">Weight Lifting</option>
            <option value="2">Cardio</option>
          </select>
        </div>
        <weight-lifting-input *ngIf="choice == 1"></weight-lifting-input>
        <cardio-input *ngIf="choice == 2"></cardio-input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
      </div>
    </div>
  </div>
    </body>`
})


export class CreateLogModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  test: string;
  choice: any = -1;
  logTypes: LogTypes;
  x: any;

  constructor(dialogService: DialogService, private subject: LogSubectService) {
    super(dialogService);
  }
  confirm() {
    this.subject.CreateWeightLiftingLog();
  }
}



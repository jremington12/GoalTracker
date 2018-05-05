import { Component } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title:string;
  message:string;
  test: string;
}
@Component({
  selector: 'create-log-modal',
  styleUrls: [],
  template: `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" (click)="close()" >&times;</button>
        <h4 class="modal-title">{{title || 'Confirm'}}</h4>
        <div>{{test}}</div>
      </div>
      <div class="modal-body">
        <p>{{message || 'Are you sure?'}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
      </div>
    </div>
  </div>`
})
export class CreateLogModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  test: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}

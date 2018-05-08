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
  template: `<body>
  <div class="background-gradient">
    <div class="content center">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="close()" >&times;</button>
            <input type="text" [(ngModel)]="title">
          </div>
          <div class="modal-body">
            <input type="text" [(ngModel)]="message">
            <p>{{message || 'Are you sure?'}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
            <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>`
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



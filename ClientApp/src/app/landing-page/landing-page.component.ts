import { Component } from '@angular/core';
import {DialogOptions, DialogService} from "ng2-bootstrap-modal";
import {CreateLogModalComponent} from "../Shared/create-log-modal.component";

@Component({
  selector: 'landing-page',
  styleUrls: ['landing-page.component.css'],
  template: `<body>
                <div class="landing-container">
                  <div class="section"><current-logs class="section"></current-logs></div>
                  <div class="section"><button type="button" class="btn btn-primary create-button" (click)="onCreateClicked()">Create New Log</button></div>
                </div>
            </body>`
})
export class LandingPageComponent {
  isCreating = false;

  constructor(private dialogService: DialogService) {}

  onCreateClicked(): void {
    let options: DialogOptions = {};
    options.backdropColor = 'white';

    let disposable = this.dialogService.addDialog(CreateLogModalComponent, {
      title:'Confirm title',
      message:'Confirm message',
      test:'nice'}, options)
      .subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
      disposable.unsubscribe();
    },30000);
  }
}



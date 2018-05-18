import { Component } from '@angular/core';
import {DialogService} from "ng2-bootstrap-modal";
import {CreateLogModalComponent} from "../Shared/create-log-modal.component";

@Component({
  selector: 'landing-page',
  styleUrls: ['landing-page.component.css'],
  template: `<body>
                <div class="landing-container">
                  <button type="button" class="btn btn-primary create-button" (click)="onCreateClicked()">Create New Log</button>
                </div>
            </body>`
})
export class LandingPageComponent {
  constructor(private dialogService: DialogService) {}

  onCreateClicked(): void {
    let disposable = this.dialogService.addDialog(CreateLogModalComponent, {
      title:'Confirm title',
      message:'Confirm message',
      test:'nice'})
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



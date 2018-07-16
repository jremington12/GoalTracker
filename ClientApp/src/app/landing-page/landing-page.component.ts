import { Component } from '@angular/core';
import {DialogOptions, DialogService} from "ng2-bootstrap-modal";
import {CreateLogModalComponent} from "../Shared/create-log-modal.component";

@Component({
  selector: 'landing-page',
  styleUrls: ['landing-page.component.css'],
  template: `<body>
                <div class="container">
                  <header class="header">
                    <div class="title">Goal Tracker</div>
                  </header>
                  <div class="content">
                    <div class="log-list">
                      <current-logs></current-logs>
                    </div>
                    <main class="main-area">
                      <div class="foursquare-row">
                        <div class="square" (click)="onCreateClicked()"><span class="square-text">Begin a New Log</span></div>
                        <div class="square"><span class="square-text">Reports</span></div>
                      </div>
                      <div class="foursquare-row">
                        <div class="square"><span class="square-text">Visualizations</span></div>
                        <div class="square"><span class="square-text">Ongoing Logs</span></div>
                      </div>
                    </main>
                  </div>
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



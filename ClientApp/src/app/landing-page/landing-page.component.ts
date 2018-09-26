import {Component, OnInit} from '@angular/core';
import {DialogOptions, DialogService} from "ng2-bootstrap-modal";
import {CreateLogModalComponent} from "../Shared/create-log-modal.component";
import {BeginNewLogModalComponent} from "../input-components/begin-new-log-modal.component";
import {LogRecord} from "../models/LogRecord";
import {SubjectService} from "../Services/subject-service";
import {LogType} from "../models/log-base";
import {LogApiSubjectService} from "../Services/log-api-subject.service";

@Component({
  selector: 'landing-page',
  styleUrls: ['landing-page.component.css'],
  template: `<body>
                <div class="landing-page-container">
                  <header class="header">
                    <div class="title">Goal Tracker</div>
                  </header>
                  <div class="content">
                    <div class="log-list">
                      <current-logs></current-logs>
                    </div>
                    <main class="main-area">
                      <div class="foursquare-row">
                        <div class="square" (click)="onBeginNewLogClicked()"><span class="square-text">Begin a New Log</span></div>
                        <div class="square" (click)="onCreateClicked()"><span class="square-text">Reports</span></div>
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
export class LandingPageComponent implements OnInit {
  public logRecords: Array<LogRecord> = [];

  constructor(private dialogService: DialogService, private subject: SubjectService, private apiSubject: LogApiSubjectService) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
    this.apiSubject.GetLogRecords();
  }

  onLogRecordsRetrieved(result: Array<LogRecord>) {
    if (!result) {
      console.log('bad result');
      return;
    }

    console.log('step 1 complete', result);

    this.logRecords = result;
  }

  onBeginNewLogClicked(): void {
    let options: DialogOptions = { backdropColor: 'white' };

    let disposable = this.dialogService.addDialog(BeginNewLogModalComponent, { logRecords: this.logRecords }, options)
      .subscribe((isConfirmed)=>{
        console.log('Confirmation: ', isConfirmed);
        if(isConfirmed) {
          alert('accepted');
        }
      });
    setTimeout(()=>{
      disposable.unsubscribe();
    },3000000);
  }

  onCreateClicked(): void {
    let options: DialogOptions = {};
    options.backdropColor = 'white';

    let disposable = this.dialogService.addDialog(CreateLogModalComponent, null, options)
      .subscribe((isConfirmed)=>{
        if(isConfirmed) {
          alert('accepted');
        }
      });
    setTimeout(()=>{
      disposable.unsubscribe();
    },3000000);
  }

  initializeSubscriptions(): void {
    this.subject.onLogRecordsRetrieved.subscribe(result => this.onLogRecordsRetrieved(result));
  }
}



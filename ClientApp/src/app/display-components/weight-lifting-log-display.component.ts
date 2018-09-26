import {Component, EventEmitter, Input, ViewChild} from "@angular/core";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {SubjectService} from "../Services/subject-service";
import {LogApiSubjectService} from "../Services/log-api-subject.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Utilities} from "../Shared/utilities";
import {DialogOptions, DialogService} from "ng2-bootstrap-modal";
import {CreateLogModalComponent} from "../Shared/create-log-modal.component";
import {LogType} from "../models/log-base";
import {EditLogModalComponent} from "../Shared/edit-log-modal.component";

@Component({
  selector: 'weight-lifting-log-display',
  styleUrls: [],
  template: `    
    <div class="card">
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid; margin-bottom: 5px">
          <div style="font-weight: bold">Weight Lifing</div>
          <icon-row [showAddIcon]="!weightLiftingLog" [showEditIcon]="weightLiftingLog" [showRemoveIcon]="weightLiftingLog"
            (addClicked)="onCreateClicked()" (removeClicked)="onRemoveClicked()" (editClicked)="onEditClicked()"></icon-row>
        </div>
        <div *ngIf="weightLiftingLog">
          <div>Total Sets: {{calculateTotalSets()}}</div>
          <div *ngIf="weightLiftingLog && weightLiftingLog.Exercises && weightLiftingLog.Exercises.length > 0"><span style="font-weight: bold"></span>
              <ng-container *ngFor="let e of weightLiftingLog.Exercises">
                <div style="font-weight: bold">{{utilities.toCamelCase(e.Name)}}</div>
                <div>Weight: {{e.Weight}}</div>
                <div>Sets: {{e.Sets}}</div>
                <div>Reps: {{e.Reps}}</div>
              </ng-container>
          </div>
        </div>
        <div *ngIf="!weightLiftingLog || weightLiftingLog.NoLog">No WeightLifting Logs Have Been Entered Today!</div>
      </div>
    </div>
    `
})

export class WeightLiftingLogDisplayComponent {
  @ViewChild(CreateLogModalComponent) createLogModal: CreateLogModalComponent;

  @Input() weightLiftingLogs: Array<WeightLiftingLog> = [];

  weightLiftingLog: WeightLiftingLog;
  isLoading = false;
  utilities = Utilities;

  constructor(private apiSubject: LogApiSubjectService, private subject: SubjectService, private dialogService: DialogService) {};

  ngOnInit() {
    this.initializeSubscriptions();
    this.isLoading = true;
    this.apiSubject.GetWeightLiftingLog();
  }

  onWeightLiftingLogsRetrieved(result: WeightLiftingLog) {
    console.log('LogReturned: ', result);

    this.isLoading = false;
    this.weightLiftingLog = result;
  }

  onWeightLiftingLogDeleted(result: WeightLiftingLog) {
    console.log('deleted: ', result);

    this.isLoading = false;
    this.weightLiftingLog = null;
  }

  calculateTotalSets(): number {
    if (!this.weightLiftingLog) {
      return;
    }

    let setCount = 0;

    if (this.weightLiftingLog.Exercises && this.weightLiftingLog.Exercises) {
      this.weightLiftingLog.Exercises.forEach(x => setCount+=x.Sets);
    }

    return setCount;
  }

  onRemoveClicked(): void {
    this.apiSubject.DeleteWeightLiftingLog(this.weightLiftingLog);
  }

  onCreateClicked(): void {
    let options: DialogOptions = {};
    options.backdropColor = 'white';

    let disposable = this.dialogService.addDialog(CreateLogModalComponent, {
      logType: LogType.WeightLiftingLog,
      message:'Confirm message'}, options)
      .subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
          alert('accepted');
        }
      });
    setTimeout(()=>{
      disposable.unsubscribe();
    },3000000);
  }

  onEditClicked(): void {
    let options: DialogOptions = {};
    options.backdropColor = 'white';

    let disposable = this.dialogService.addDialog(EditLogModalComponent, {
      logType: LogType.WeightLiftingLog,
      log: this.weightLiftingLog,
      message:'Confirm message'}, options)
      .subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
          alert('accepted');
        }
      });
    setTimeout(()=>{
      disposable.unsubscribe();
    },3000000);
  }

  initializeSubscriptions(): void {
    this.subject.onWeightLiftingLogRetrieved.subscribe(result => this.onWeightLiftingLogsRetrieved(result));
    this.subject.onWeightLiftingLogDeleted.subscribe(result => this.onWeightLiftingLogDeleted(result))
  }
}



import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";
import {SubjectService} from "./subject-service";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {LoginModel, RegisterModel} from "../models/user-models";
import {LogRecord} from "../models/LogRecord";

@Injectable()
export class LogApiSubjectService {
  constructor(private apiService: ApiService, private subjectService: SubjectService) {}

  public CreateWeightLiftingLog(weightLiftingLog: WeightLiftingLog): void {
    this.apiService.CreateWeightLiftingLog(weightLiftingLog)
      .subscribe(result => this.subjectService.onWeightLiftingLogCreated.next(result),
                      error => console.log(error)
      );
  }

  public UpdateWeightLiftingLog(weightLiftingLog: WeightLiftingLog): void {
    this.apiService.UpdateWeightLiftingLog(weightLiftingLog)
      .subscribe(result => this.subjectService.onWeightLiftingLogUpdated.next(result),
        error => console.log(error)
      );
  }

  public GetWeightLiftingLog(): void {
    this.apiService.GetWeightLiftingLog()
      .subscribe(result => {
          this.subjectService.onWeightLiftingLogRetrieved.next(result);
        },
            error => console.log(error)
      );
  }

  public Login(loginModel: LoginModel) {
    this.apiService.Login(loginModel)
      .subscribe(result => {
        this.subjectService.onLogin.next(result)
      },
      error => console.log(error)
    );
  }

  public Register(registerModel: RegisterModel) {
    this.apiService.Register(registerModel)
      .subscribe(result => {
          console.log('registered');
        },
        error => console.log(error)
      );
  }

  public CreateLogRecord(logRecord: LogRecord) {
    this.apiService.CreateLogRecord(logRecord)
      .subscribe(result => {
          this.subjectService.onLogRecordCreated.next(result);
        },
        error => console.log(error)
      );
  }

  public GetLogRecords() {
    this.apiService.GetLogRecords()
      .subscribe(result => {
          this.subjectService.onLogRecordsRetrieved.next(result)
        },
        error => console.log(error)
      );
  }

  public DeleteWeightLiftingLog(weightLiftingLog: WeightLiftingLog) {
    this.apiService.DeleteWeightLiftingLog(weightLiftingLog)
      .subscribe(result => {
        this.subjectService.onWeightLiftingLogDeleted.next(result)
      },
      error => console.log(error)
    );
  }
}

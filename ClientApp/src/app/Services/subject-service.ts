import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";
import {LogRecord} from "../models/LogRecord";
import {Log} from "../models/log-base";

@Injectable()
export class SubjectService {
  public onWeightLiftingLogCreated: BehaviorSubject<WeightLiftingLog> = new BehaviorSubject<WeightLiftingLog>(null)
  public onWeightLiftingLogUpdated: BehaviorSubject<WeightLiftingLog> = new BehaviorSubject<WeightLiftingLog>(null)
  public onWeightLiftingLogRetrieved: BehaviorSubject<WeightLiftingLog> = new BehaviorSubject<WeightLiftingLog>(null);
  public onLogin: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public onLogRecordCreated: BehaviorSubject<LogRecord> = new BehaviorSubject<LogRecord>(null);
  public onLogRecordsRetrieved: BehaviorSubject<Array<LogRecord>> = new BehaviorSubject<Array<LogRecord>>(null);
  public onWeightLiftingLogDeleted: BehaviorSubject<WeightLiftingLog> = new BehaviorSubject<WeightLiftingLog>(null);

  constructor() {}
}

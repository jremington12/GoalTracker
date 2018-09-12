import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {WeightLiftingExercise, WeightLiftingLog} from "../models/weight-lifting-log-model";
import {Injectable} from "@angular/core";
import {LogType} from "../models/log-base";
import {Register} from "ts-node";
import {LoginModel, RegisterModel} from "../models/user-models";
import {LogRecord} from "../models/LogRecord";
import {SharedApplicationStateService} from "./shared-application-state.service";

const BASE_URL = "http://localhost:8001";
const LOG_CONTROLLER = 'Log';
const WEIGHT_LIFTING_ACTION = 'WeightLifting';
const WEIGHT_LIFTING_LOG_CONTROLLER = 'WeightLiftingLog'
const LOG_RECORD_CONTROLLER = 'LogRecord'
const HOME_CONTROLLER = 'Home';
const REGISTER = 'Register';
const LOGIN = 'Login';
const LOG_RECORD = 'LogRecord';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient, private sas: SharedApplicationStateService) {}

  public CreateWeightLiftingLog(weightLiftingLog: WeightLiftingLog): Observable<WeightLiftingLog> {
    weightLiftingLog.UserId = this.sas.getUserId();
    return this._http.post<WeightLiftingLog>(`${BASE_URL}/${WEIGHT_LIFTING_LOG_CONTROLLER}/Post`, weightLiftingLog);
  }

  public UpdateWeightLiftingLog(weightLiftingLog: WeightLiftingLog): Observable<WeightLiftingLog> {
    weightLiftingLog.UserId = this.sas.getUserId();
    return this._http.put<WeightLiftingLog>(`${BASE_URL}/${WEIGHT_LIFTING_LOG_CONTROLLER}/Put`, weightLiftingLog);
  }

  public GetWeightLiftingLog(): Observable<WeightLiftingLog> {
    let userId = this.sas.getUserId();
    return this._http.get<WeightLiftingLog>(`${BASE_URL}/${WEIGHT_LIFTING_LOG_CONTROLLER}/GetToday?UserId=${userId}`);
  }

  public DeleteWeightLiftingLog(weightLiftingLog: WeightLiftingLog): Observable<WeightLiftingLog> {
    return this._http.put<WeightLiftingLog>(`${BASE_URL}/${WEIGHT_LIFTING_LOG_CONTROLLER}/Delete`, weightLiftingLog);
    //let body = JSON.stringify(weightLiftingLog);
    //let result = this._http.request('delete', `${BASE_URL}/${WEIGHT_LIFTING_LOG_CONTROLLER}/Delete);
    //return (<Observable<WeightLiftingLog>>result);
  }

  public Login(loginModel: LoginModel): Observable<any> {
    let result = this._http.post<any>(`${BASE_URL}/${HOME_CONTROLLER}/${LOGIN}`, loginModel);
    return result;
  }

  public Register(registerModel: RegisterModel): Observable<any> {
    let result = this._http.post<any>(`${BASE_URL}/${HOME_CONTROLLER}/${REGISTER}`, registerModel);
    return result;
  }

  public CreateLogRecord(logRecord: LogRecord): Observable<LogRecord> {
    let result = this._http.post<LogRecord>(`${BASE_URL}/${LOG_RECORD_CONTROLLER}/Post`, logRecord);
    return result;
  }

  public GetLogRecords(): Observable<Array<LogRecord>> {
    let userId = this.sas.getUserId();
    let result = this._http.get<Array<LogRecord>>(`${BASE_URL}/${LOG_RECORD_CONTROLLER}/Get?UserId=${userId}`);
    return result;
  }
}

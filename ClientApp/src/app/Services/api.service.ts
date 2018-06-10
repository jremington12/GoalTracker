import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {WeightLiftingExercise, WeightLiftingLog} from "../models/weight-lifting-log-model";
import {Injectable} from "@angular/core";
import {LogType} from "../models/log-base";

const BASE_URL = "http://localhost:8001/api";
const LOG_CONTROLLER = 'Log';
const WEIGHT_LIFTING_ACTION = 'WeightLifting';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  public CreateWeightLiftingLog(weightLiftingLog: WeightLiftingLog): Observable<WeightLiftingLog> {
    let exercise: WeightLiftingExercise = new WeightLiftingExercise();
    exercise.Name = 'Rowww';
    exercise.Reps = 6;
    exercise.Sets = 4;
    exercise.Weight = 150;

    let body: WeightLiftingLog = new WeightLiftingLog();
    body.TotalSets = 5;
    body.Exercises = new Array<WeightLiftingExercise>();
    body.Exercises.push(exercise);
    body.UserId = 'userB';
    body.LogType = LogType.CardioLog;

    return this._http.post<WeightLiftingLog>(`${BASE_URL}/${LOG_CONTROLLER}/${WEIGHT_LIFTING_ACTION}`, weightLiftingLog);
  }

  public GetWeightLiftingLog(userId: string): Observable<Array<WeightLiftingLog>> {
    let result = this._http.get<Array<WeightLiftingLog>>(`${BASE_URL}/${LOG_CONTROLLER}/${WEIGHT_LIFTING_ACTION}?UserId=${userId}`);
    let final = result;

    return result;
  }
}

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {WeightLiftingExercise, WeightLiftingLog} from "../models/weight-lifting-log-model";
import {Injectable} from "@angular/core";

const baseUrl = "http://localhost:8001/api";

export class Dog {
  public Bark: string;
}

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  public CreateWeightLiftingLog(): Observable<WeightLiftingLog> {
    let controller: string = 'Log';
    let action: string = 'WeightLifting';

    let exercise: WeightLiftingExercise = new WeightLiftingExercise();
    exercise.Name = 'bench press';
    exercise.Reps = 6;
    exercise.Sets = 4;
    exercise.Weight = 150;

    let body: WeightLiftingLog = new WeightLiftingLog();
    body.TotalSets = 5;
    body.Exercises = new Array<WeightLiftingExercise>();
    body.Exercises.push(exercise);
    body.UserId = 'userA';

    //let bod = JSON.stringify(body);
    let bod = new Dog();
    bod.Bark = "test";


    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers
    };

    return this._http.post<WeightLiftingLog>(`${baseUrl}/${controller}/${action}`, body);
  }
}

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";

@Injectable()
export class SubjectService {
  public onWeightLiftingLogCreated: BehaviorSubject<WeightLiftingLog> = new BehaviorSubject<WeightLiftingLog>(null)
  public onWeightLiftingLogRetrieved: BehaviorSubject<Array<WeightLiftingLog>> = new BehaviorSubject<Array<WeightLiftingLog>>([]);

  constructor() {}
}

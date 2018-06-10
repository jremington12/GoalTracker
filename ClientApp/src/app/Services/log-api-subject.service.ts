import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";
import {SubjectService} from "./subject-service";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import {WeightLiftingLog} from "../models/weight-lifting-log-model";

@Injectable()
export class LogApiSubjectService {
  constructor(private apiService: ApiService, private subjectService: SubjectService) {}

  public CreateWeightLiftingLog(weightLiftingLog: WeightLiftingLog): void {
    this.apiService.CreateWeightLiftingLog(weightLiftingLog)
      .subscribe(result => this.subjectService.onWeightLiftingLogCreated.next(result),
                      error => console.log(error)
      );
  }

  public GetWeightLiftingLog(): void {
    this.apiService.GetWeightLiftingLog('userB')
      .subscribe(result => {
          this.subjectService.onWeightLiftingLogRetrieved.next(result);
        },
            error => console.log(error)
      );
  }
}

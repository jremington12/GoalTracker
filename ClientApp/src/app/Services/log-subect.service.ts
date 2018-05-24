import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LogSubectService {
  constructor(private apiService: ApiService) {}

  public CreateWeightLiftingLog(): void {
    this.apiService.CreateWeightLiftingLog()
      .subscribe(result => console.log(result),
                      error => console.log(error)
      );
  }
}

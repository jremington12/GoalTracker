import {Log} from "./log-base";

export class WeightLiftingLog extends Log {
  public WeightLiftingLogId: number;
  public Exercises: Array<WeightLiftingExercise> = [];
  public UserId: string;
  public TotalSets: number;

  public constructor() { super() };
}

export class WeightLiftingExercise {
  public WeightLiftingExerciseId: number;
  public WeightLiftingLogId: number;
  public Name: string;
  public Sets: number;
  public Reps: number;
  public Weight: number;
}

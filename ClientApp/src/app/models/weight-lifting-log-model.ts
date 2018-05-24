export class WeightLiftingLog {
  public WeightLiftingLogId: number;
  public Exercises: Array<WeightLiftingExercise>;
  public Date: Date;
  public UserId: string;
  public TotalSets: number;
  public NoLog: boolean;
}

export class WeightLiftingExercise {
  public WeightLiftingExerciseId: number;
  public WeightLiftingLogId: number;
  public Name: string;
  public Sets: number;
  public Reps: number;
  public Weight: number;
}

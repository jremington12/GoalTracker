export class Log {
  public Id: number;
  public LogType: LogType;
  public CreatedDate: Date;
  public NoLog: boolean;
}

export enum LogType {
  WeightLiftingLog,
  CardioLog
}


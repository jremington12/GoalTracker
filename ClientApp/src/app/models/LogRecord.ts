import {LogType} from "./log-base";

export class LogRecord {
  LogRecordId: number;
  LogType: LogType;
  UserId: string;
  Deleted: boolean;
}

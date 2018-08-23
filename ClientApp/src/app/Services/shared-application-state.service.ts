import {Injectable} from "@angular/core";

@Injectable()
export class SharedApplicationStateService {
  private currentUserId: string;

  constructor() {
    let userId = localStorage.getItem('currentUserId');
    if (userId) {
      this.currentUserId = userId;
    }
  }

  setCurrentUserId(userId: string): void {
    localStorage.setItem('currentUserId', userId);
    this.currentUserId = userId;
  }

  getUserId(): string {
    return this.currentUserId;
  }
}

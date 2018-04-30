import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<body>
                <div class="background-gradient">
                  <div class="content center">
                    <span class="heading-primary">Goal Tracker</span>

                    <div class="input-group mb-3">
                      <input type="text" class="form-control" [(ngModel)]="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                      <input type="text" class="form-control" [(ngModel)]="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                    </div>

                    <button type="button" class="btn btn-primary login-button" (click)="onLoginClicked()">Login</button>
                  </div>
                </div>
            </body>`
})
export class HomeComponent {
  public username = '';
  public password = '';

  public onLoginClicked(): void {
    console.log('username: ', this.username);
    console.log('password: ', this.password);
    this.reset();
  }

  private reset(): void {
    this.username = '';
    this.password = '';
  }
}

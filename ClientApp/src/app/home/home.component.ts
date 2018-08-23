import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel, RegisterModel} from "../models/user-models";
import {SubjectService} from "../Services/subject-service";
import {LogApiSubjectService} from "../Services/log-api-subject.service";
import {SharedApplicationStateService} from "../Services/shared-application-state.service";

@Component({
  selector: 'app-home',
  template: `<body>
                
                <div class="background-gradient">
                  <div class="content center" style="position: absolute; text-align: center;">
                    <span class="heading-primary">Goal Tracker</span>

                    <div class="input-group mb-3">
                      <input type="text" class="form-control" [(ngModel)]="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                      <input type="text" class="form-control" [(ngModel)]="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                    </div>

                    <button type="button" class="btn btn-primary login-button" (click)="onLoginClicked()">Login</button>
                    <button type="button" class="btn btn-primary login-button" (click)="onRegisterClicked()">Register</button>
                  </div>
                </div>
            </body>`
})
export class HomeComponent implements OnInit {
  public username = '';
  public password = '';

  public constructor(private _router: Router, private logSubject: LogApiSubjectService, private subject: SubjectService, private sas: SharedApplicationStateService) {};

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  public onLoginClicked(): void {
    console.log('username: ', this.username);
    console.log('password: ', this.password);

    let loginModel: LoginModel = new LoginModel();
    loginModel.UserName = this.username;
    loginModel.Password = this.password;

    this.logSubject.Login(loginModel);

    this.reset();

   // this._router.navigate(['landing-page']);
  }

  public onRegisterClicked(): void {
    console.log('username: ', this.username);
    console.log('password: ', this.password);

    let loginModel: RegisterModel = new RegisterModel();
    loginModel.UserName = this.username;
    loginModel.Password = this.password;

    this.logSubject.Register(loginModel);

    this.reset();

    // this._router.navigate(['landing-page']);
  }

  private reset(): void {
    this.username = '';
    this.password = '';
  }

  onLogin(result: any) {
    if (!result) { return; }

    console.log('Sucessfully logged in: ', result);
    this.sas.setCurrentUserId(result.Id);
    console.log('id worked: ', this.sas.getUserId());
    this._router.navigate(['landing-page']);
  }

  private initializeSubscriptions(): void {
    this.subject.onLogin.subscribe(result => this.onLogin(result));
  }
}

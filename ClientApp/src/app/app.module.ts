import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {BootstrapModalModule, DialogService} from "ng2-bootstrap-modal";
import {CreateLogModalComponent} from "./Shared/create-log-modal.component";
import {WeightliftingInputComponent} from "./input-components/weightlifting-input-component/weightlifting-input.component";
import {CardioInputComponent} from "./input-components/cardio-input-component/cardio-input.component";
import {LogApiSubjectService} from "./Services/log-api-subject.service";
import {ApiService} from "./Services/api.service";
import {CurrentLogsComponent} from "./landing-page/current-logs/current-logs.component";
import {SubjectService} from "./Services/subject-service";
import {WeightLiftingLogDisplayComponent} from "./display-components/weight-lifting-log-display.component";
import {OAuthModule} from "angular-oauth2-oidc";
import {SharedApplicationStateService} from "./Services/shared-application-state.service";
import {BeginNewLogModalComponent} from "./input-components/begin-new-log-modal.component";
import {MatIconModule, MatIconRegistry} from "@angular/material";
import {IconRowComponent} from "./Shared/icon-row.component";
import {EditLogModalComponent} from "./Shared/edit-log-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LandingPageComponent,
    CreateLogModalComponent,
    WeightliftingInputComponent,
    CardioInputComponent,
    CurrentLogsComponent,
    WeightLiftingLogDisplayComponent,
    BeginNewLogModalComponent,
    IconRowComponent,
    EditLogModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body}),
    RouterModule.forRoot([
      { path: 'login', component: HomeComponent, pathMatch: 'full' },
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '', component: HomeComponent }
    ]),
    MatIconModule
  ],
  providers: [DialogService, LogApiSubjectService, ApiService, SubjectService, SharedApplicationStateService],
  bootstrap: [AppComponent],
  entryComponents: [CreateLogModalComponent, BeginNewLogModalComponent, EditLogModalComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/sprite.svg'));
  }
}

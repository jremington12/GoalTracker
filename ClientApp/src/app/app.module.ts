import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    CardioInputComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BootstrapModalModule.forRoot({container:document.body}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  entryComponents: [CreateLogModalComponent]
})
export class AppModule { }

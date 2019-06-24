import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import {HttpClientModule} from '@angular/common/http';
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddApplicantComponent,
    ApplicantsComponent,
    ApplicantComponent,
    AddApplicantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

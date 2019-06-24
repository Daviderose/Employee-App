import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApplicantModel} from '../models/applicant.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApplicantService {
  applicantsUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getApplicants(): Observable<ApplicantModel[]> {
    return this.http.get<ApplicantModel[]>(this.applicantsUrl);
  }

  addApplicant(applicant: ApplicantModel): Observable<ApplicantModel> {
    return this.http.post<ApplicantModel>(this.applicantsUrl, applicant, httpOptions);
  }

  deleteApplicant(applicant: ApplicantModel): Observable<ApplicantModel> {
    const url = `${this.applicantsUrl}/${applicant.id}`;
    return this.http.delete<ApplicantModel>(url, httpOptions);
  }
}



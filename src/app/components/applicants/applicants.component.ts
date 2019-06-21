import { Component, OnInit } from '@angular/core';
import {ApplicantModel} from '../../models/applicant.model';
import {ApplicantService} from '../../services/applicant.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  applicants: ApplicantModel[];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(applicants => {
      this.applicants = applicants;
    });
  }

  deleteApplicant(applicant: ApplicantModel) {
    this.applicants = this.applicants.filter(t => t.id !== applicant.id);
  }

}

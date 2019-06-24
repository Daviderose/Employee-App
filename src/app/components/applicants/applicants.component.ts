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
    // Remove from UI
    this.applicants = this.applicants.filter(t => t.id !== applicant.id);

    // Remove from Server
    this.applicantService.deleteApplicant(applicant).subscribe();
  }

  addApplicant(applicant: ApplicantModel) {
    this.applicantService.addApplicant(applicant).subscribe( applicant => {
      this.applicants.push(applicant);
    });
  }

}

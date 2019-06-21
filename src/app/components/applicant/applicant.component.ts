import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApplicantModel} from '../../models/applicant.model';
import {ApplicantService} from '../../services/applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  @Input()
  applicant: ApplicantModel;

  @Output()
  deleteApplicant: EventEmitter<ApplicantModel> = new EventEmitter();

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
  }

  onDelete(applicant) {
    this.deleteApplicant.emit(applicant);
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent implements OnInit {
  @Output()
    addApplicant: EventEmitter<any> = new EventEmitter();

  name: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const applicant = {
      name: this.name,
      email: this.email
    };
    this.addApplicant.emit(applicant);
  }

}

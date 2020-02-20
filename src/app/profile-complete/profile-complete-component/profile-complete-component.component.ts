import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-complete-component',
  templateUrl: './profile-complete-component.component.html',
  styleUrls: ['./profile-complete-component.component.css'],
  animations: [
    trigger('fade',[
      state('true', style({ height: '*' })),
    ])
  ]
})
export class ProfileCompleteComponentComponent implements OnInit {
  
  minDate: Date;
  maxDate: Date;
 
  profileCompleteForm: FormGroup;
  datasaved = false;
  message: string;
  Error = false;

  wizard = 'account-info-form';
  wizardHeading = "BASIC INFORMATION";
  
  constructor(private formbuilder: FormBuilder,private router: Router) { 
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit() {
    this.profileCompleteForm = this.formbuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      jobTitle: ['', Validators.required],
      jobType: ['', Validators.required],
      employer: ['', Validators.required],
      staffingCompany: ['', Validators.required],
      workExpAvailability: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      skillName: ['', Validators.required],
      skillExp: ['', Validators.required],
      skillLastUsed: ['', Validators.required],
      idealJobAvailabilityNow: ['', Validators.required],
      empTypeDirectHire: ['', Validators.required],
      idealJobContract: ['', Validators.required],
      idealJobPartTime: ['', Validators.required],
      idealJobAvailabilityDate: ['', Validators.required],
      idealJobDesiredPay: ['', Validators.required],
      idealJobAnnually: ['', Validators.required]

    });
  }

  onSubmit() {
    console.log(this.profileCompleteForm.value);
  }

  profileCreate(event){
    if(event=='work-exp-form'){this.wizardHeading = 'WORK EXPERIENCE';}
    else if(event=='account-info-form'){this.wizardHeading = 'BASIC INFORMATION';}
    else if(event=='skill-form'){this.wizardHeading = 'SKILLS';}
    else if(event=='ideal-job-form'){this.wizardHeading = 'IDEAL JOB';}

    this.wizard = event;
    console.log(event);
  }

}

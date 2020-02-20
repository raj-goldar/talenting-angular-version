import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { EducationComponentComponent } from './profile-component/education-component/education-component.component';
import { IdealJobComponentComponent } from './profile-component/ideal-job-component/ideal-job-component.component';
import { ListVerifierComponentComponent } from './profile-component/list-verifier-component/list-verifier-component.component';
import { RecentBarComponentComponent } from './profile-component/recent-bar-component/recent-bar-component.component';
import { ScoreComponentComponent } from './profile-component/score-component/score-component.component';
import { SkillComponentComponent } from './profile-component/skill-component/skill-component.component';
import { WorkExperienceComponentComponent } from './profile-component/work-experience-component/work-experience-component.component';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [ProfileComponentComponent, EducationComponentComponent, IdealJobComponentComponent, ListVerifierComponentComponent, RecentBarComponentComponent, ScoreComponentComponent, SkillComponentComponent, WorkExperienceComponentComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCompleteRoutingModule } from './profile-complete-routing.module';
import { ProfileCompleteComponentComponent } from './profile-complete-component/profile-complete-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [ProfileCompleteComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ProfileCompleteRoutingModule
  ],
  exports: [
    ProfileCompleteComponentComponent
  ]
})
export class ProfileCompleteModule {

 }

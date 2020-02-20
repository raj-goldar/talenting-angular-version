import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [SignupComponentComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    SignupRoutingModule
  ],
  exports: [
    SignupComponentComponent
  ]
})
export class SignupModule { 

}

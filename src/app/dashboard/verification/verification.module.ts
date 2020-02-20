import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponentComponent } from './verification-component/verification-component.component';
import { VerificationReceivedComponentComponent } from './verification-received-component/verification-received-component.component';
import { VerificationRequestedComponentComponent } from './verification-requested-component/verification-requested-component.component';
import { MatChipsModule,MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [VerificationComponentComponent, VerificationReceivedComponentComponent, VerificationRequestedComponentComponent],
  imports: [
    CommonModule,
    VerificationRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatChipsModule
  ],exports: [
    VerificationComponentComponent
  ]
})
export class VerificationModule { }

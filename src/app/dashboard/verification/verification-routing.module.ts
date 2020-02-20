import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificationComponentComponent } from './verification-component/verification-component.component';
import { VerificationRequestedComponentComponent } from './verification-requested-component/verification-requested-component.component';
import { VerificationReceivedComponentComponent } from './verification-received-component/verification-received-component.component';

const routes: Routes = [
  {path:'Verification',component:VerificationComponentComponent},
  {path:'Verification/requested',component:VerificationRequestedComponentComponent},
  {path:'Verification/received',component:VerificationReceivedComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRoutingModule { }

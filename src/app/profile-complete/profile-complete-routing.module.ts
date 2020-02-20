import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCompleteComponentComponent } from './profile-complete-component/profile-complete-component.component';


const routes: Routes = [
  {path:'profile-complete', component: ProfileCompleteComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCompleteRoutingModule { }

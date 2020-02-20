import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LandingPageComponentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    LandingPageRoutingModule
  ],
  exports: [
    LandingPageComponentComponent
  ]
})
export class LandingPageModule { }

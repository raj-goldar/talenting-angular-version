import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  exports:[
    TestComponentComponent
  ]
})
export class TestModule { }

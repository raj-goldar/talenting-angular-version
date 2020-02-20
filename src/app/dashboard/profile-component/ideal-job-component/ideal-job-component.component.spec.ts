import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealJobComponentComponent } from './ideal-job-component.component';

describe('IdealJobComponentComponent', () => {
  let component: IdealJobComponentComponent;
  let fixture: ComponentFixture<IdealJobComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealJobComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealJobComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

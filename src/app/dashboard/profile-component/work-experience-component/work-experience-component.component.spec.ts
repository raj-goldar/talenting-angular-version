import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceComponentComponent } from './work-experience-component.component';

describe('WorkExperienceComponentComponent', () => {
  let component: WorkExperienceComponentComponent;
  let fixture: ComponentFixture<WorkExperienceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

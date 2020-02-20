import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompleteComponentComponent } from './profile-complete-component.component';

describe('ProfileCompleteComponentComponent', () => {
  let component: ProfileCompleteComponentComponent;
  let fixture: ComponentFixture<ProfileCompleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCompleteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCompleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

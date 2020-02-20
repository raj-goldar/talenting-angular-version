import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderComponentComponent } from './profile-header-component.component';

describe('ProfileHeaderComponentComponent', () => {
  let component: ProfileHeaderComponentComponent;
  let fixture: ComponentFixture<ProfileHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

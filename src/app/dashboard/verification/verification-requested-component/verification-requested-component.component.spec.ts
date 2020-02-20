import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationRequestedComponentComponent } from './verification-requested-component.component';

describe('VerificationRequestedComponentComponent', () => {
  let component: VerificationRequestedComponentComponent;
  let fixture: ComponentFixture<VerificationRequestedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationRequestedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationRequestedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

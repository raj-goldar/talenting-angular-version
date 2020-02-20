import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationReceivedComponentComponent } from './verification-received-component.component';

describe('VerificationReceivedComponentComponent', () => {
  let component: VerificationReceivedComponentComponent;
  let fixture: ComponentFixture<VerificationReceivedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationReceivedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationReceivedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

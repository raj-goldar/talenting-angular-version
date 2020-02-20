import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerifierComponentComponent } from './list-verifier-component.component';

describe('ListVerifierComponentComponent', () => {
  let component: ListVerifierComponentComponent;
  let fixture: ComponentFixture<ListVerifierComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerifierComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerifierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

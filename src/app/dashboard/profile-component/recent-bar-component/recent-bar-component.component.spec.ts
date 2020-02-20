import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBarComponentComponent } from './recent-bar-component.component';

describe('RecentBarComponentComponent', () => {
  let component: RecentBarComponentComponent;
  let fixture: ComponentFixture<RecentBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

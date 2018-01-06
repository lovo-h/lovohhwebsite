import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Status404Component } from './status404.component';

describe('Status404Component', () => {
  let component: Status404Component;
  let fixture: ComponentFixture<Status404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Status404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Status404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Status404Component', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {
  SharedModule,
  BizCardComponent,
  FlipcardComponent
} from '../shared';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BizCardComponent,
        FlipcardComponent,
      ],
      imports: [ SharedModule ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});

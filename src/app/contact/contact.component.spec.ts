import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {
  SharedModule,
  BizCardComponent,
  FlipcardComponent,
} from '../shared';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
        BizCardComponent,
        FlipcardComponent,
      ],
      imports: [ SharedModule ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ContactComponent', () => {
    expect(component).toBeTruthy();
  });
});

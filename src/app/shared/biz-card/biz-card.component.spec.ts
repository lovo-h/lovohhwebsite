import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizCardComponent, FlipcardComponent, SharedModule } from '../../shared';


describe('BizCardComponent', () => {
  let component: BizCardComponent;
  let fixture: ComponentFixture<BizCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BizCardComponent,
        FlipcardComponent,
      ],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the BizCardComponent', () => {
    expect(component).toBeTruthy();
  });
});

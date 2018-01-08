import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcardComponent, BizCardComponent, SharedModule } from '../../shared';


describe('FlipcardComponent', () => {
  let component: FlipcardComponent;
  let fixture: ComponentFixture<FlipcardComponent>;

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
    fixture = TestBed.createComponent(FlipcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FlipcardComponent', () => {
    expect(component).toBeTruthy();
  });
});

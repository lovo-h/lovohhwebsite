import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcardComponent, BizCardComponent, SharedModule } from '../../shared';
import { MouseStateService } from '../services';
import { MockMouseStateService } from '../services/mock-mouse-state.service';

describe('FlipcardComponent', () => {
  let component: FlipcardComponent;
  let fixture: ComponentFixture<FlipcardComponent>;
  let mockMousStateService: MockMouseStateService;

  beforeEach(async(() => {
    mockMousStateService = new MockMouseStateService();
    TestBed.configureTestingModule({
      declarations: [
        BizCardComponent,
        FlipcardComponent,
      ],
      imports: [SharedModule],
      providers: [
        {provide: MouseStateService, useValue: mockMousStateService}
      ]
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

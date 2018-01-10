import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcardComponent, SharedModule } from '../';
import { ProjectCardComponent } from './project-card.component';
import { MockMouseStateService } from '../services/mock-mouse-state.service';
import { MouseStateService } from '../services';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let mockMousStateService: MockMouseStateService;

  beforeEach(async(() => {
    mockMousStateService = new MockMouseStateService();
    TestBed.configureTestingModule({
      declarations: [ FlipcardComponent, ProjectCardComponent ],
      imports: [SharedModule],
      providers: [
        {provide: MouseStateService, useValue: mockMousStateService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.cardInfo = {};
    fixture.detectChanges();
  });

  it('should create the ProjectCardComponent', () => {
    expect(component).toBeTruthy();
  });
});

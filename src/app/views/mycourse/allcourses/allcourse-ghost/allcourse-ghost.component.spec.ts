import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcourseGhostComponent } from './allcourse-ghost.component';

describe('AllcourseGhostComponent', () => {
  let component: AllcourseGhostComponent;
  let fixture: ComponentFixture<AllcourseGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcourseGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcourseGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

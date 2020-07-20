import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGhostComponent } from './course-ghost.component';

describe('CourseGhostComponent', () => {
  let component: CourseGhostComponent;
  let fixture: ComponentFixture<CourseGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

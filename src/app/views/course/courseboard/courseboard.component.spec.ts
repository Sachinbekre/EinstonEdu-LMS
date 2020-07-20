import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseboardComponent } from './courseboard.component';

describe('CourseboardComponent', () => {
  let component: CourseboardComponent;
  let fixture: ComponentFixture<CourseboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

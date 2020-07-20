import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubcoursesComponent } from './unsubcourses.component';

describe('UnsubcoursesComponent', () => {
  let component: UnsubcoursesComponent;
  let fixture: ComponentFixture<UnsubcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

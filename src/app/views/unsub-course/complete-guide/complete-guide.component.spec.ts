import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteGuideComponent } from './complete-guide.component';

describe('CompleteGuideComponent', () => {
  let component: CompleteGuideComponent;
  let fixture: ComponentFixture<CompleteGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

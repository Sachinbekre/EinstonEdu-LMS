import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaGhostComponent } from './qa-ghost.component';

describe('QaGhostComponent', () => {
  let component: QaGhostComponent;
  let fixture: ComponentFixture<QaGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

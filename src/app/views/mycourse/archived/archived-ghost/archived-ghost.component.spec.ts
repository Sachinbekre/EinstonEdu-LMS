import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedGhostComponent } from './archived-ghost.component';

describe('ArchivedGhostComponent', () => {
  let component: ArchivedGhostComponent;
  let fixture: ComponentFixture<ArchivedGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

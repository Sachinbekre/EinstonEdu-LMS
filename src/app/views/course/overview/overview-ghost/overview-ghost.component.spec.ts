import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewGhostComponent } from './overview-ghost.component';

describe('OverviewGhostComponent', () => {
  let component: OverviewGhostComponent;
  let fixture: ComponentFixture<OverviewGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

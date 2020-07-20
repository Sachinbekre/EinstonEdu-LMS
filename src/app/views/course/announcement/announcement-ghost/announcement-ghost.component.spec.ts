import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementGhostComponent } from './announcement-ghost.component';

describe('AnnouncementGhostComponent', () => {
  let component: AnnouncementGhostComponent;
  let fixture: ComponentFixture<AnnouncementGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

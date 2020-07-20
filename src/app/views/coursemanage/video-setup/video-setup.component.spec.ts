import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSetupComponent } from './video-setup.component';

describe('VideoSetupComponent', () => {
  let component: VideoSetupComponent;
  let fixture: ComponentFixture<VideoSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

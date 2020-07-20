import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarOneComponent } from './aside-bar-one.component';

describe('AsideBarOneComponent', () => {
  let component: AsideBarOneComponent;
  let fixture: ComponentFixture<AsideBarOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideBarOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

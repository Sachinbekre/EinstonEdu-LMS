import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiclientsComponent } from './apiclients.component';

describe('ApiclientsComponent', () => {
  let component: ApiclientsComponent;
  let fixture: ComponentFixture<ApiclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

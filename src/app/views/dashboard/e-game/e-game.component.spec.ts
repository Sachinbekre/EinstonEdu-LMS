import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EGameComponent } from './e-game.component';

describe('EGameComponent', () => {
  let component: EGameComponent;
  let fixture: ComponentFixture<EGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

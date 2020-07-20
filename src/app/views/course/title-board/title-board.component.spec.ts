import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBoardComponent } from './title-board.component';

describe('TitleBoardComponent', () => {
  let component: TitleBoardComponent;
  let fixture: ComponentFixture<TitleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

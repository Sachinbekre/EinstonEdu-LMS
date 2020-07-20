import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksGhostComponent } from './bookmarks-ghost.component';

describe('BookmarksGhostComponent', () => {
  let component: BookmarksGhostComponent;
  let fixture: ComponentFixture<BookmarksGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

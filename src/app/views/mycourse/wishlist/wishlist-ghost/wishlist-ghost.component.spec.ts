import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistGhostComponent } from './wishlist-ghost.component';

describe('WishlistGhostComponent', () => {
  let component: WishlistGhostComponent;
  let fixture: ComponentFixture<WishlistGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

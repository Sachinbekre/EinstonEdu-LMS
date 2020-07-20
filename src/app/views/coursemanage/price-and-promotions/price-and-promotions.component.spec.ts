import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndPromotionsComponent } from './price-and-promotions.component';

describe('PriceAndPromotionsComponent', () => {
  let component: PriceAndPromotionsComponent;
  let fixture: ComponentFixture<PriceAndPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAndPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAndPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGHostComponent } from './collection-ghost.component';

describe('CollectionGHostComponent', () => {
  let component: CollectionGHostComponent;
  let fixture: ComponentFixture<CollectionGHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionGHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

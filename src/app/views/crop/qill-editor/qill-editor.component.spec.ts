import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QillEditorComponent } from './qill-editor.component';

describe('QillEditorComponent', () => {
  let component: QillEditorComponent;
  let fixture: ComponentFixture<QillEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QillEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

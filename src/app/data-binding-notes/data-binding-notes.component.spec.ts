import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingNotesComponent } from './data-binding-notes.component';

describe('DataBindingNotesComponent', () => {
  let component: DataBindingNotesComponent;
  let fixture: ComponentFixture<DataBindingNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

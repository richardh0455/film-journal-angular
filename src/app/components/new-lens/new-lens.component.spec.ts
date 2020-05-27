import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLensComponent } from './new-lens.component';

describe('NewLensComponent', () => {
  let component: NewLensComponent;
  let fixture: ComponentFixture<NewLensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

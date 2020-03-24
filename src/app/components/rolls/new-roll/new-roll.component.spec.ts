import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRollComponent } from './new-roll.component';

describe('NewRollComponent', () => {
  let component: NewRollComponent;
  let fixture: ComponentFixture<NewRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

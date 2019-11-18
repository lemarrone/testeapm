import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apm1Component } from './apm1.component';

describe('Apm1Component', () => {
  let component: Apm1Component;
  let fixture: ComponentFixture<Apm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

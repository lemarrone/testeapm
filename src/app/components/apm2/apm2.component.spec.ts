import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apm2Component } from './apm2.component';

describe('Apm2Component', () => {
  let component: Apm2Component;
  let fixture: ComponentFixture<Apm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

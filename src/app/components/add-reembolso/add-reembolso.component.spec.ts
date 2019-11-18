import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReembolsoComponent } from './add-reembolso.component';

describe('AddReembolsoComponent', () => {
  let component: AddReembolsoComponent;
  let fixture: ComponentFixture<AddReembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

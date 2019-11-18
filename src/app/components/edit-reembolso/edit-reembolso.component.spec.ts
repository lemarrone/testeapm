import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReembolsoComponent } from './edit-reembolso.component';

describe('EditReembolsoComponent', () => {
  let component: EditReembolsoComponent;
  let fixture: ComponentFixture<EditReembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

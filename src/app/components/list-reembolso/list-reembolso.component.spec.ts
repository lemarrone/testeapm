import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReembolsoComponent } from './list-reembolso.component';

describe('ListReembolsoComponent', () => {
  let component: ListReembolsoComponent;
  let fixture: ComponentFixture<ListReembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

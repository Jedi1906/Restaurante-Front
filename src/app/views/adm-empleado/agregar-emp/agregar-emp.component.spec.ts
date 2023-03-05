import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpComponent } from './agregar-emp.component';

describe('AgregarEmpComponent', () => {
  let component: AgregarEmpComponent;
  let fixture: ComponentFixture<AgregarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

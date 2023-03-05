import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmpComponent } from './actualizar-emp.component';

describe('ActualizarEmpComponent', () => {
  let component: ActualizarEmpComponent;
  let fixture: ComponentFixture<ActualizarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

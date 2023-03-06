import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEstComponent } from './pedido-est.component';

describe('PedidoEstComponent', () => {
  let component: PedidoEstComponent;
  let fixture: ComponentFixture<PedidoEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

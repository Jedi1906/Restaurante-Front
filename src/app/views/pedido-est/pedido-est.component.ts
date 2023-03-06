import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-pedido-est',
  templateUrl: './pedido-est.component.html',
  styleUrls: ['./pedido-est.component.css']
})
export class PedidoEstComponent implements OnInit {

  public product: any = [];
  public grandTotal !: number;
  constructor(private  cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(resp => {
      this.product = resp;
      this.grandTotal = this.cartService.getTotal();

    });
  }

}

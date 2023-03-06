import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

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

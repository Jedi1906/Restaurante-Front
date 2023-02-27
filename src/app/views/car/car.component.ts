import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public product: any = [];
  public grandTotal !: number;
  constructor(private  cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(resp =>{
      this.product = resp;
      this.grandTotal = this.cartService.getTotal();

    });
  }
remove(item: any){
    this.cartService.removeCartItem(item);
}
vaciar(){
    this.cartService.removeAllCart();
}
}

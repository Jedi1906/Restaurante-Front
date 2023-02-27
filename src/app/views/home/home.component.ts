import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ApiService} from "../../services/api.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public productList: any;
  constructor(private title: Title, private  api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.title.setTitle('Comida a tus horas');
    this.api.getProductos().subscribe(res =>{
      this.productList = res;
      this.productList.forEach((a:any) =>{
        Object.assign(a,{quantity:1, total: a.price});
      })
    });
  }
addToCart(item : any){
this.cartService.addToCar(item);
}
}

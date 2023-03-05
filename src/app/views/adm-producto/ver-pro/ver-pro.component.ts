import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ApiService} from "../../../services/api.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-ver-pro',
  templateUrl: './ver-pro.component.html',
  styleUrls: ['./ver-pro.component.css']
})
export class VerProComponent implements OnInit {


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
}

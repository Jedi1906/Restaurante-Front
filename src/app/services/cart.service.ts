import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartListe: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(prodcut: any){
    this.cartListe.push(...prodcut);
    this.productList.next(prodcut);
  }
  addToCar(product: any){
    this.cartListe.push(product);
    this.productList.next(this.cartListe);
    this.getTotal();
  }
  getTotal(): number{
    let grandTotal = 0;
    this.cartListe.map((res: any) =>{
      grandTotal += res.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartListe.map(( producto: any, index: any) =>{
      if(product.id === producto.id){
      this.cartListe.splice(index, 1);
      }
    });
  }
  removeAllCart(){
    this.cartListe = [];
    this.productList.next(this.cartListe);

  }
}

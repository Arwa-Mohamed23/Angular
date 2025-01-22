import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterproductService {

  private counter = new BehaviorSubject<number>(0);
  private CartProduct = new BehaviorSubject<Map<number,number>>(new Map<number,number>());

  constructor() { }

  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newCounter: number){
    this.counter.next(newCounter);
  }
  
  getCartProduct(){
    return this.CartProduct.asObservable();
  }

  setCartProduct(newcartproduct:Map<number,number>){
    this.CartProduct.next(newcartproduct);
  }

  addProduct(productId: number) {
    const currentCart = this.CartProduct.getValue();
    const existingQuantity = currentCart.get(productId) || 0;
    currentCart.set(productId, existingQuantity + 1);
    this.CartProduct.next(currentCart); 
  }
}

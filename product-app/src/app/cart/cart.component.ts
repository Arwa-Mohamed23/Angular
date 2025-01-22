import { Component } from '@angular/core';
import { CounterproductService } from '../services/counterproduct.service';
import { ProductRequestService } from '../services/product-request.service';
import { Product } from '../types/product';
import { CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartProducts!: Map<number, number>;
  product: Product[]=[];
  counterproduct:number = 0;

  constructor( private counterService: CounterproductService, private productrequestservice: ProductRequestService){}
  
    ngOnInit(){
      this.counterService.getCounter().subscribe(res=> this.counterproduct=res);

      this.counterService.getCartProduct().subscribe((cart) => {
        this.cartProducts = cart;
      });

      this.cartProducts.forEach((value, key)=>{
        this.productrequestservice.getProductDetails(key).subscribe(res => this.product.push(res));
      });
    }

    deleteProduct(id:number){
      this.counterService.setCounter(this.counterproduct-(this.cartProducts.get(id)||0));
      this.cartProducts.delete(id);
      this.counterService.setCartProduct(new Map(this.cartProducts));
    }

    decreaseCounter(id: number){
      if(this.cartProducts.get(id) === 0){
        return this.deleteProduct(id);
      }
      this.counterService.setCounter(this.counterproduct-1);
      let c:number= this.cartProducts.get(id) || 0;
      this.cartProducts.set(id,c-1)
    }

    increaseCounter(id: number){
      this.counterService.setCounter(this.counterproduct+1);
      let c:number= this.cartProducts.get(id) || 0;
      this.cartProducts.set(id,c+1)
    }

    getTotalPrice(){
      let sum=0;
      this.product.forEach((elem)=>{
        sum+=(this.cartProducts.get(elem.id) || 0)*elem.price;
      });
      return sum;
    }
}

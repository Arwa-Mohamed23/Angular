import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { CurrencyPipe} from '@angular/common';
import { StarRatingPipe } from '../pipes/star-rating.pipe';


import { CounterproductService } from '../services/counterproduct.service';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, CurrencyPipe, StarRatingPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() productCard!:Product;

  counterproduct:number = 0;

  constructor(private router:Router, private counterService: CounterproductService){}

  ngOnInit(){
    this.counterService.getCounter().subscribe(res=> this.counterproduct = res);
  }

  handleDetailsItem(id:number){
    this.router.navigate(['/product-details',id]);
  }

  handleAddCart(id: number){
    this.counterService.addProduct(id);
    this.counterService.setCounter(this.counterproduct+1);
    // console.log(id, this.productCartFreq);
  }
}

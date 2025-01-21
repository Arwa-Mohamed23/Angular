import { Component } from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import { Product } from '../types/product';
import { ProductRequestService } from '../services/product-request.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products!: Product[];
  constructor( private productrequestservice: ProductRequestService ){}
  ngOnInit(){
    this.productrequestservice.getProductList().subscribe(res=> this.products = res.products);
  }
}

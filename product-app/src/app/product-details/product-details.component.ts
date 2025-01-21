import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../types/product';
import { StarRatingPipe } from '../pipes/star-rating.pipe';
import { ProductRequestService } from '../services/product-request.service';

@Component({
  selector: 'app-product-details',
  imports: [StarRatingPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private activeRoute: ActivatedRoute, private productrequestservice: ProductRequestService) { }

  productId: number = 0;
  product!: Product;

  ngOnInit() {
    this.productId = this.activeRoute.snapshot.params['id'];
    this.productrequestservice.getProductDetails(this.productId).subscribe(res => this.product = res);
  }
}

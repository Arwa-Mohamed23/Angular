import { Product } from './product';

export interface ProductData {
    "limit":number,
    "products": Product[],
    "skip":number,
    "total":number, 
}

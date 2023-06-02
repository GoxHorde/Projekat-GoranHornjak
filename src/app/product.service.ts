import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/assets/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: any = {};
  constructor() {}
  getProductById(id: string) {
    this.product = PRODUCTS.find((item: any) => item.id === id);
    return this.product;
  }
}

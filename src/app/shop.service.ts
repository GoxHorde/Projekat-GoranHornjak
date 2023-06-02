import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/assets/products';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  products: any = [];
  constructor() {}
  getProducts() {
    this.products = PRODUCTS;
    return this.products;
  }
  getProductsByCategory(category: any) {
    const result = PRODUCTS.filter((item) => item.category == category);
    console.log(result);
    this.products = result;
    return this.products;
  }
}

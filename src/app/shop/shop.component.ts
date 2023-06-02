import { Component } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  products: any = [];
  constructor(public shopService: ShopService) {}
  getProducts(): void {
    this.products = this.shopService.getProducts();
  }
  getProductsByCategory(category: any) {
    console.log(category);
    this.products = this.shopService.getProductsByCategory(category);
  }
  ngOnInit() {
    this.getProducts();
  }
}

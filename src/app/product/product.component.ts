import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product: any = {};
  productId: string | undefined;
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}
  getProduct(id: any) {
    this.product = this.productService.getProductById(id);
  }
  ngOnInit() {
    const id = this.route?.snapshot.paramMap.get('id');

    this.getProduct(id);
  }
}

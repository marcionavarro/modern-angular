import { Injectable, signal } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<Product[]>([]);

  addTocart(product: Product) {
    console.log('Produto adicionado ao carrinho:', product.name);
    this.cartItems.update((items) => [...items, product]);
  }
}

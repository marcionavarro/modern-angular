import { CartService } from './../../cart/cart-service';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly searhTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Cafeteira elétrica',
      description: 'Cafeteira automática com reservatório de 1,5L e botão de preparo rápido.',
      price: 249.9,
      originalPrice: 299.9,
    },
    {
      id: 2,
      name: 'Fone de ouvido sem fio',
      description: 'Fone Bluetooth com cancelamento de ruído e até 20 horas de bateria.',
      price: 179.9,
      originalPrice: 219.9,
    },
    {
      id: 3,
      name: 'Mochila urbana',
      description:
        'Mochila resistente, com compartimento para notebook de 15,6" e bolsos organizadores.',
      price: 169.9,
    },
    /* {
      id: 4,
      name: 'Smartphone com câmera tripla',
      description: 'Smartphone 128GB com câmera tripla, tela AMOLED e carregamento rápido.',
      price: 1299.00,
      originalPrice: 1399.00,
    }, */
  ]);

  private readonly cartService = inject(CartService);

  protected readonly filteredProducts = computed(() => {
    const term = this.searhTerm().toLocaleLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.description.toLocaleLowerCase().includes(term),
    );
  });

  protected onAddToCart(product: Product) {
    this.cartService.addTocart(product);
  }

  /* protected clearSearch() {
    this.searhTerm.set('');
  } */

  /* protected trimSearch() {
    this.searhTerm.update(value => value.trim());
  } */
}

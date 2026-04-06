import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Bem-vindo ao Angular moderno!';
  protected isDisabled = false;

  onClick() {
    console.log('Botão clicado!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  increateCounter() {
    this.count.update((value) => value + 1);
  }

  decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  resetCounter() {
    this.count.set(0);
  }
}

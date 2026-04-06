import { Component, computed, effect, signal } from '@angular/core';

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

  protected doubleCount = computed(() => this.count() * 2);

  private readonly countLog = effect(() => {
    console.log('Count value changed:', this.count());
  });

  // getDoubleCount() {
  //   console.log('getDoubleCount called');
  //   return this.count() * 2;
  // }

  protected increateCounter() {
    this.count.update((value) => value + 1);
  }

  protected decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}

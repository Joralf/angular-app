import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div>
    <span data-testid="count">Current Count: {{ count }}</span>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  </div>`,
})
export class CounterComponent {
  @Input() count = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}

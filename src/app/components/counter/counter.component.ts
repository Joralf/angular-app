import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div>
    <div role="counter">{{ count }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  </div>`,
})
export class CounterComponent implements OnInit {
  count: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}

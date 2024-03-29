import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increment, decrement, reset } from '../state/counter.actions';
import { counterSelector } from '../state/counter.reducer';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  template: `
    <h1>My Counter</h1>

    <div>Current Count: {{ count() }}</div>

    <br />
    
    <button (click)="increment()">Increment</button>

    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>  
  `
})
export default class MyCounterComponent {
  count = this.store.selectSignal(counterSelector);

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();

  increment() { this.counter.next(this.counter.value + 1); }
  decrement() { this.counter.next(this.counter.value - 1); }
  reset() { this.counter.next(0); }
}

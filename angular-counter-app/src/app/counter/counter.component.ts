import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}

  increment() { this.counterService.increment(); }
  decrement() { this.counterService.decrement(); }
  reset() { this.counterService.reset(); }
}

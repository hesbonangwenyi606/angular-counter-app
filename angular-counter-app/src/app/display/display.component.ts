import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  counterValue: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.counter$.subscribe(value => this.counterValue = value);
  }
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola counter</h1>
  <h3>{{counter}}</h3>
  <button (click)="sumar(counter)">Contador +</button>
  <button (click)="restar(counter)">Contador -</button>
  <button (click)="reset(counter)">Contador reset</button>

  `
})

export class CounterComponent {
  constructor() { }

  public counter: number =10;

  /**
   * sumar
   */
  sumar(value: number):void {
    this.counter += 1;
  }
  restar(value: number):void {
    this.counter -= 1;
  }

  reset(value: number):void {
    this.counter = 10;
  }
}

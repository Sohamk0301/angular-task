import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  num: number;
  factorial: number = null;

  calculateFactorial() {
    let fact = 1;
    for(let i = 1; i <= this.num; i++) {
      fact *= i;
    }
    this.factorial = fact;
  }
}

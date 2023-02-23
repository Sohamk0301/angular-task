import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  wish1 = '';

  display() {
    alert('Click event is handled');
    this.wish1 = 'Hello Everyone';
  }

  dblClick() {
    alert('Double click event is handled');
  }

  blurEvent() {
    alert('Blur event is executed');
  }

  eventHandle(evt: any) {
    console.log(evt);
    //this.wish1=evt.type;
  }

  value1;
  inputevent1(event1: any) {
    this.value1 = event1.value;
  }

  displayconsole(value: any) {
    console.log(value);
  }

  eventhandle(evt: any) {
    console.log(evt);
    //alert(evt.target.innerHTML);
  }
}

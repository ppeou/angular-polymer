import { Component, Input } from '@angular/core';
import '@ppeou/my-component/plm-pct-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wc';
  @Input() myValue: number = 33.33;

  onPlmPctInputChanged(event: Event) {
    console.log(event);
  }
}

import { Component } from '@angular/core';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webitech';

  prod : boolean = environment.production;

  a: number = 0;
  b: number = 0;
  result: number | undefined;

  calculate(): void {
    this.result = this.a + this.b;
  }
}

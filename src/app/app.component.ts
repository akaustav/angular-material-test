import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Using NgForm with NgModel';
  public name: string;
  public city: string;
  public state: string;
}

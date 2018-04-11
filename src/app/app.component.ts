import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerConfig = [
    {
      name: ''
    },
    {
      name: 'User'
    },
    {
      name: 'Gender'
    },
    {
      name: 'Company'
    },
  ];
}

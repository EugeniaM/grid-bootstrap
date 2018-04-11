import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerConfig = [
    {
      name: '',
      sortable: false,
      width: '16%'
    },
    {
      name: 'User',
      sortable: true,
      key: 'user',
      width: '28%'
    },
    {
      name: 'Gender',
      sortable: true,
      key: 'gender',
      width: '28%'
    },
    {
      name: 'Company',
      sortable: true,
      key: 'company',
      width: '28%'
    },
  ];

  sortConfig = {
    key: 'user',
    direction: true
  }

  tableBodyConfig = [
    {
      button: {
        title: 'TEST'
      },
      user: {
        value: 'Eugenia'
      },
      gender: {
        value: 'female'
      },
      company: {
        value: 'EPAM'
      }
    },
    {
      button: {
        title: 'ASDF'
      },
      user: {
        value: 'Tatiana'
      },
      gender: {
        value: 'female'
      },
      company: {
        value: 'Murka'
      }
    },
    {
      button: {
        title: 'QWER'
      },
      user: {
        value: 'Eugene'
      },
      gender: {
        value: 'male'
      },
      company: {
        value: 'Yalantis'
      }
    },
  ];

  buttonClick(data) {
    console.log('!!! ===>', data);
  }

  sort(event: { key: string, direction: boolean }) {
    console.log(event);
  }
}

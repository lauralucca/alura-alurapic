import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raposinhas';
  photos = [
    {
      url: 'https://www.criptomoedasfacil.com/wp-content/uploads/2018/11/74e53faa3d7e2fbc.jpg',
      description: '"closeup red fox'
    }, {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlvonVjp7pE4EXXgLlPLzDlSnYveu3BU_KuNIgxN63zvT_WdkzA',
      description: 'fennec fox'
    }, {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oRdPDIB1wl-ZCEs7xDBS4-vHM6MFuWItulZSOPkcMJbLi3iXPg',
      description: 'arctic fox'
    }
  ];
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  columnDefs = [

    {headerName: 'Id', field: 'id', sortable: true, filter: true},
    {headerName: 'Name', field: 'employee_name', sortable: true, filter: true},
    {headerName: 'Salary', field: 'employee_salary', sortable: true, filter: true},
    {headerName: 'Age', field: 'employee_age', sortable: true, filter: true},
    {headerName: 'Image', field: 'profile_image', sortable: true, filter: true}
  ];

  rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    }
}

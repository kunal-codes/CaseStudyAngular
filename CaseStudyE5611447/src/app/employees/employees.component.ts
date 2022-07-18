import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface EMPLOYEE {
  userId: String;
  jobTitleName: String;
  firstName: String;
  lastName: String;
  preferredFullName: String;
  employeeCode: String;
  region: String;
  phoneNumber: String;
  emailAddress: String;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: EMPLOYEE[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/users').subscribe((res : EMPLOYEE[]) => {
      this.employees = res;
    })
  }

}

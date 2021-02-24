import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  EmployeeRows = [{ EID: 1, FirstName: "John", LastName: "Smith" },
  { EID: 2, FirstName: "Michael", LastName: "Van" },
  { EID: 3, FirstName: "Andrew", LastName: "Fuller" },];
  //Employees = ["madan","101" , 21];



}

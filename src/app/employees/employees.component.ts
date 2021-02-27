import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  
  EmployeeRows = [{ EID: 1, EmpFName: "John", EmpLName: "Smith" },
  { EID: 2, EmpFName: "Michael", EmpLName: "Van" },
  { EID: 3, EmpFName: "Andrew", EmpLName: "FYuller" },];
  //Employees = ["madan","101" , 21];

  EmployeeRow = { EID: "", EmpFName: "", EmpLName: "" };
  evtCurrentRow(currentRow) {
    this.EmployeeRow = currentRow;
  }

  onEmployeeCreated($event) {
    this.EmployeeRows.push({
      EID: $event.EID,
      EmpFName: $event.EmpFName,
      EmpLName: $event.EmpLName
    })
    console.log("listening ", $event);
  }

  ngOnInit(): void {
  }





}

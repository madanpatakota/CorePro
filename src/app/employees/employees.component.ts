import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }



  EmployeeRows = [{ EID: 1, EmpFName: "Nancy	", EmpLName: "Davolio", City: "Seattle" },
  { EID: 2, EmpFName: "Andrew", EmpLName: "Fuller", City: "Tacoma" },
  { EID: 3, EmpFName: "Janet	", EmpLName: "Leverling", City: "Kirkland" },
  { EID: 4, EmpFName: "	Margaret	", EmpLName: "Peacock", City: "Redmond" },
  { EID: 5, EmpFName: "	Steven	", EmpLName: "Buchanan", City: "London" },
  { EID: 6, EmpFName: "Michael	", EmpLName: "Suyama", City: "London" },
  { EID: 7, EmpFName: "Robert	", EmpLName: "King", City: "London" },
  { EID: 8, EmpFName: "Laura	", EmpLName: "Callahan", City: "Seattle" },
  { EID: 9, EmpFName: "Anne	", EmpLName: "Dodsworth", City: "London" }];
  //Employees = ["madan","101" , 21];

  EmployeeRow = { EID: "", EmpFName: "", EmpLName: "" , City : "" };
  evtCurrentRow(currentRow) {
    this.EmployeeRow = currentRow;
    console.log(currentRow);
  }

  onEmployeeCreated($event) {
    this.EmployeeRows.push({
      EID: $event.EID,
      EmpFName: $event.EmpFName,
      EmpLName: $event.EmpLName,
      City: $event.EmpCity
    })
    console.log("listening ", $event);
  }

  ngOnInit(): void {
  }





}

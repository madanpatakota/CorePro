import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  EmployeeFName = "John";
  EmployeeLName = "Smith";
  EmployeeID = 6;
  
  EmployeeAddress = "Bangolore";

  EmployeeName = "";

  GetEmployee() {
    this.EmployeeName = this.EmployeeFName + this.EmployeeLName;
    return this.EmployeeName;
  }

  evtAddress($event) {
    console.log($event);
    this.EmployeeAddress =  $event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

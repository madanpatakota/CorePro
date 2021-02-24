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

  EmployeeAddress = "";
  EmployeeName = "";

  // make sure while working Employee Adress Should be empty
  AdressBGColor = "";
  IsAdressCSSClass = false;
  GetEmployee() {
    this.EmployeeName = this.EmployeeFName + this.EmployeeLName;
    return this.EmployeeName;
  }

  evtAddress($event) {
    console.log($event);
    this.EmployeeAddress = $event.target.value;
    this.IsAdressSpecified = this.EmployeeAddress.length > 0 ? true : false;
    this.AdressBGColor = this.EmployeeAddress.length > 5 ? "yellow" : "red";
    this.IsAdressCSSClass = this.EmployeeAddress.length > 5 ? true : false;
    console.log(this.IsAdressCSSClass);
  }

  IsAdressSpecified: any = false;

  constructor() {
    //this.IsAdressSpecified = false;
  }

  ngOnInit(): void {
  }



  EmployeeRows = [{ EID: 1, FirstName: "John", LastName: "Smith" },
  { EID: 2, FirstName: "Michael", LastName: "Van" },
  { EID: 3, FirstName: "Andrew", LastName: "Fuller" },];
  //Employees = ["madan","101" , 21];


}

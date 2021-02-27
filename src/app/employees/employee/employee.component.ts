import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {

  EID = "";
  EmpLName = "";
  EmpFName = "";


  @Input() EmployeeElement = { EID: "", EmpLName: "", EmpFName: ""}

  @Output() addEmployee = new EventEmitter<{
    EID: string,
    EmpLName: string,
    EmpFName: string,
  }>();


  @ViewChild("EID") vEID: ElementRef;
  @ViewChild("EmpFName") vEmpFName: HTMLElement;
  @ViewChild("EmpLName") vEmpLName: HTMLElement;

  // @ContentChild("EmpCity") vEmpCity:ElementRef;

  EmployeeAddress = "";
  EmployeeName = "";

  // make sure while working Employee Adress Should be empty
  AdressBGColor = "";
  IsAdressCSSClass = false;
  GetEmployee() {
    this.EmployeeName = this.EmpFName + this.EmpLName;
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

  AddEmployee(empIDEl: HTMLInputElement, empFNameEl: HTMLInputElement, empLNameEl: HTMLInputElement) {
    //console.dir(empEl);
    this.addEmployee.emit({
      EID: empIDEl.value,
      EmpFName: empFNameEl.value,
      EmpLName: empLNameEl.value
    })
  }


}

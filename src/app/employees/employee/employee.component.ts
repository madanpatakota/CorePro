import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit, AfterViewInit , OnChanges {

  EID = "";
  EmpLName = "";
  EmpFName = "";


  @Input() EmployeeElement = { EID: "", EmpLName: "", EmpFName: "", City: "" };

  @Output() addEmployee = new EventEmitter<{
    EID: string,
    EmpLName: string,
    EmpFName: string,
  }>();


  ngOnChanges(){
    //console.log("Onint" , this.element);
    console.log("ngOnchanges");
    const nativeElement = this.cCity?.nativeElement;
    //    const employeeList = this.EmployeeElement.City;
    if (nativeElement) {
      this.cCity.nativeElement.value = this.EmployeeElement.City;
    }
  }
 

  ngOnInit(): void {
    //console.log("Onint" , this.element);
    console.log("ngOnInit");
    const nativeElement = this.cCity?.nativeElement.value;
    //    const employeeList = this.EmployeeElement.City;
    if (nativeElement) {
      this.cCity.nativeElement.value = this.EmployeeElement.City;
    }
  }
  ngAfterViewInit(): void {
    //console.log("afteviewint" , this.element);

  }

  ngAfterContentInit(): void {
    //console.log("afteviewint" , this.element);
    const nativeElement = this.cCity?.nativeElement.value;
    console.log("ngAfterContentInit");
    //    const employeeList = this.EmployeeElement.City;
    if (nativeElement) {
      this.cCity.nativeElement.value = this.EmployeeElement.City;
    }
  }



  @ViewChild("EID") vEID: ElementRef;
  @ViewChild("EmpFName") vEmpFName: HTMLElement;
  @ViewChild("EmpLName") vEmpLName: HTMLElement;
  @ContentChild("EmpCity") cCity: ElementRef;

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

  constructor(private element: ElementRef) {
    //console.log(element);
    //this.IsAdressSpecified = false;
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

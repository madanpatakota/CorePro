import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  @Input("inputcontainer") inputcontainer:any;

  ngOnInit(): void {
    console.log(this.inputcontainer);
  }

}

import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CorePro';

  init = true;

  @ViewChild("kdf") tempalte:TemplateRef<any>;
  @ViewChild("abc" , {read:ViewContainerRef}) conatiner:ViewContainerRef;

  items = [{ isClicked:false, container: "fContainer", template: "fTemplate" },
  { isClicked:false,container: "secondContainer", template: "secondTemplate" }]

  Name = "Madan";

  evtClick(container:ElementRef,item) {
    //this.conatiner.createEmbeddedView(this.tempalte);
     //this.conatiner.createEmbeddedView(this.tempalte);
     item.isClicked = true;
  }

  constructor(private element: ElementRef, private render: Renderer2) {
    console.log(this.render)
  }
}

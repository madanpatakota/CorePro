import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CorePro';

  constructor(private element : ElementRef , private render : Renderer2){
       console.log(this.render)

 
       


  }
}


import { ThrowStmt } from '@angular/compiler';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplyRedColor]'
})
export class ApplyRedColorDirective implements OnInit {

  @Input('ChangeDefaultColor') YellowColor;
  @HostBinding("style.fontSize") fontSize ;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }
  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.YellowColor);
    this.fontSize = "10px";
  }

  @HostListener('mouseover') mouseovertoparagraph() {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.YellowColor);
    this.fontSize = "30px";
  }

  @HostListener('mouseleave') mouseleavefromparagraph() {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "red");
    this.fontSize = "10px";
  }

}



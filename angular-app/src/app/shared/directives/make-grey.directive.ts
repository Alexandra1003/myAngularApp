import { Directive, ElementRef, HostListener, HostBinding, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appMakeGrey]'
})
export class MakeGreyDirective {
  @HostBinding('class.card-outline-primary') private isHover: boolean = false;

  @Input('appMakeGrey') config = {
    querySelector: '.hello-text'
  };
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    // el.nativeElement.style.backgroundColor = 'grey';
   }

  @HostListener('mouseover') onMouseOver() {
    const helloTextEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(helloTextEl, 'display', 'block');
    this.isHover = true;
  }

  @HostListener('mouseout') onMouseOut() {
    const helloTextEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(helloTextEl, 'display', 'none');
    this.isHover = false;
  }

}

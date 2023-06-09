import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = 'white';
  private defaultColor: string = 'red';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmBorderCard') borderColor: string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
}
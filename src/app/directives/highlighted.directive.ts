import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {

  constructor() { }

  @HostBinding('className')
  get cssClasses() {
    return "highlighted"
  }
  // @HostBinding('class.highlighted') 
  // isHighlighted = true;

}

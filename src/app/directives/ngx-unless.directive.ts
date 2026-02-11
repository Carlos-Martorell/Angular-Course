import { Directive, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
})
export class NgxUnlessDirective {

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef
  // ) {
  // }

  // @input()
  // set ngxUnless(condition: boolean){
  //   if(!condition){
  //     this.viewContainer.createEmbeddedView(this.templateRef)
  //   }
  // }

}

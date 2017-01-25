
import {Directive, ElementRef, Renderer} from '@angular/core';


@Directive({
    selector: '[autoGrow]',         //for attribute directives we surround with square brackets.
    host: {

        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'

    }
})

export class AutoGrowDirective{

    //_el: ElementRef;

    constructor(private el: ElementRef, private renderer: Renderer){
       // this._el = el;
    }

    onFocus(){
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }

}
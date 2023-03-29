import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error')handleError(): void{

    const elNative=this.elHost.nativeElement;

    console.log('Esta imagen revento--> ',this.elHost);

    elNative.src = 'https://static.eldiario.es/clip/1984887a-773c-480b-95ce-9a8b4d59f08c_16-9-aspect-ratio_default_0.jpg';
  }

  constructor(private elHost:ElementRef) { }

}

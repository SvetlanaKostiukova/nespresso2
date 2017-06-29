import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements OnInit, OnChanges {
  @ViewChild('embed') embed: ElementRef;
  @Input() slide: any;
  @Input() idx: string = "";
  @Input() showText: boolean = false;
  @Input() info: boolean = false;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(chngs){
    if(chngs.showText || chngs.info){
      this.switchInfo(this.showText&&this.info);
    }
  }

  switchInfo(flag: boolean){
      if(flag){// && this.embed){
        // var embedDiv: HTMLElement = this.embed.nativeElement;
        // console.log(embedDiv.children)
        var paths = document.getElementsByClassName(this.idx + " path");
        var texts = document.getElementsByClassName(this.idx + " sign");

        setTimeout(() => {
          for(var i = 0; i < paths.length; i++){
            var p = paths.item(i);
            p.classList.add("shown");
          }

          setTimeout(() => {
            for(var i = 0; i < texts.length; i++){
              var t = texts.item(i);
              t.classList.add("shown");
            }
            }, 500);

         }, window.innerWidth < 650? 0: 700);

      } else {// if(this.embed){
        // var embedDiv: HTMLElement = this.embed.nativeElement;
        var paths = document.getElementsByClassName(this.idx + " path");
        var texts = document.getElementsByClassName(this.idx + " sign");

        for(var i = 0; i < paths.length; i++){
          var p = paths.item(i);
          p.classList.remove("shown");
        }

        for(var i = 0; i < texts.length; i++){
          var t = texts.item(i);
          t.classList.remove("shown");
        }
      }
  }

  ngAfterViewInit(){
    this.switchInfo(this.showText&&this.info)
  }

  sanitizeColor(color: string){
    return this.sanitizer.bypassSecurityTrustStyle(color);
  }

  sanitizeImg(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/' + img);
  }

  
}

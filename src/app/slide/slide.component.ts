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
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.showText){// && this.embed){
      // var embedDiv: HTMLElement = this.embed.nativeElement;
      // console.log(embedDiv.children)
      var paths = document.getElementsByClassName("path");
      var texts = document.getElementsByClassName("sign");

      for(var i = 0; i < paths.length; i++){
        var p = paths.item(i);
        p.classList.add("shown");
      }

      for(var i = 0; i < texts.length; i++){
        var t = texts.item(i);
        t.classList.add("shown");
      }

    }
    //  else{// if(this.embed){
    //   // var embedDiv: HTMLElement = this.embed.nativeElement;
    //   var paths = document.getElementsByClassName("path");
    //   var texts = document.getElementsByClassName("sign");

    //   for(var i = 0; i < paths.length; i++){
    //     var p = paths.item(i);
    //     p.classList.remove("shown");
    //   }

    //   for(var i = 0; i < texts.length; i++){
    //     var t = texts.item(i);
    //     t.classList.remove("shown");
    //   console.log(paths, texts);
    //   }
    // }
  }

  ngAfterViewInit(){
    if(this.showText){// && this.embed){
      // var embedDiv: HTMLElement = this.embed.nativeElement;
      // console.log(embedDiv.children)
      var paths = document.getElementsByClassName("path");
      var texts = document.getElementsByClassName("sign");

      setTimeout(() => {
      for(var i = 0; i < paths.length; i++){
        var p = paths.item(i);
        p.classList.add("shown");
        console.log(p.classList)
      }

      setTimeout(() => {
      for(var i = 0; i < texts.length; i++){
        var t = texts.item(i);
        t.classList.add("shown");
      }

      }, 500);

      console.log(paths, texts);
      }, 700);
    }
  }

  sanitizeColor(color: string){
    return this.sanitizer.bypassSecurityTrustStyle(color);
  }

  sanitizeImg(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/' + img);
  }

  
}

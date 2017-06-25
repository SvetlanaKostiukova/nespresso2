import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements OnInit {
  @Input() slide: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeColor(color: string){
    return this.sanitizer.bypassSecurityTrustStyle(color);
  }
}

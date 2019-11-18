import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apm1',
  templateUrl: './apm1.component.html',
  styleUrls: ['./apm1.component.css']
})
export class Apm1Component implements OnInit {
  @Input()
  url: string = "http://apm.montd.io:5601/app/apm";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer:DomSanitizer) { }
 

  ngOnInit() {
    console.log('teste teste teste');
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}

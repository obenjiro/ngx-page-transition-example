import Animations from './../animations';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ Animations.pageTrasition ]
})
export class AboutComponent implements OnInit {
  // TODO: create parent class when issue will be resolved
  // https://github.com/angular/angular/issues/11606
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}

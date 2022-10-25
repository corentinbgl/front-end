import { state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [ state('open', style({
                display: 'block' }))]
})
export class SideBarComponent implements OnInit {

  constructor() { }

 

  ngOnInit(): void {
  }

}

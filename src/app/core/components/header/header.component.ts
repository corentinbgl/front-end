import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ trigger ('openClose', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s', style({ transform: 'translate(0%)' , }))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s', style({ transform: 'translate(-100%)'}))
    ]),
    
  ])]
})
export class HeaderComponent implements OnInit {
 
  isOpen = false;

  ngOnInit(): void {}


  toggle() {
    this.isOpen = !this.isOpen
  }
  basket() {
    window.alert("panier vide");
  }
}
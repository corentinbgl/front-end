import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart!: number;

  ngOnInit() {
    this.cart = 0;
    
  }
  onAddCart(){
    this.cart++;
  }
  onToggle() {

  }

}

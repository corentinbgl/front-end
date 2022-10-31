import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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
  
  constructor(private router: Router){}

  isOpen = false;

  ngOnInit(): void {}


  toggle() {
    this.isOpen = !this.isOpen
  }
  basket() {
    window.alert("Votre panier est vide");
  }
  onPanier(){
    this.router.navigateByUrl('panier')
  }
  onAcceuil(){
    this.router.navigateByUrl('')
  }
  onMarvel(){
    this.router.navigateByUrl('marvel')
  }
  onProfil(){
    this.router.navigateByUrl('profil')
  }
  onManga(){
    this.router.navigateByUrl('manga')
  }
}
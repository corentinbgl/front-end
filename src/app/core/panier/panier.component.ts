import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAcceuil(){
    this.router.navigateByUrl('/')
  }
}

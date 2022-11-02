import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/landing-page/models/comic.model';

@Component({
  selector: 'app-alert-panier',
  templateUrl: './alert-panier.component.html',
  styleUrls: ['./alert-panier.component.scss']
})
export class AlertPanierComponent implements OnInit {
  @Input() comic!: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}

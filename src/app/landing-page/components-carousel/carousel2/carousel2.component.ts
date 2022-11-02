import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comic } from '../../models/comic.model';


@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Carousel2Component implements OnInit {
  @Input() buycomics!: Observable<Comic[]>;

  constructor(private router : Router) { }

  ngOnInit(): void { 
  }

  addPanier(){
    
  }

}

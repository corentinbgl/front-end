import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/landing-page/models/comic.model';



@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarouselDetailComponent implements OnInit {
  @Input() buycomics!: Observable<Comic[]>;

  constructor() { }

  ngOnInit(): void {
    
  }
}

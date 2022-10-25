
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Comic } from '../../models/comic.model';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  @Input() comics!: Observable<Comic[]>;

  constructor() { }

  ngOnInit(): void {
  }

}

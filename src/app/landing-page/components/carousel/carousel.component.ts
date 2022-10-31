import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../../models/comic.model';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Router } from '@angular/router';

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  @Input() comics!: Observable<Comic[]>;


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addDetail(comics_id: string){
    this.router.navigateByUrl('detail/' + comics_id);
  }
  

}

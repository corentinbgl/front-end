import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsRoutingModule } from './comics-routing.module';
import { CarouselDetailComponent } from './components/carousel-detail/carousel-detail.component';
import { SwiperModule } from 'swiper/angular';
import { DetailcomicsComponent } from './components/detailcomics/detailcomics.component';


@NgModule({
  declarations: [
    CarouselDetailComponent,
    DetailcomicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    SwiperModule
  ]
})
export class ComicsModule { }

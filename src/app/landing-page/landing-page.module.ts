import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { ComicsService } from './services/comics.service';
import { Carousel2Component } from './components-carousel/carousel2/carousel2.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    Carousel2Component
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    SwiperModule,
    CoreModule
  ],
  providers: [
    ComicsService
  ]
})
export class LandingPageModule { }

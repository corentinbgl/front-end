import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { ComicsService } from './services/comics.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SwiperModule,
    HttpClientModule
  ],
  exports: [
    LandingPageComponent
  ],
  providers: [
    ComicsService
  ]
})
export class LandingPageModule { }

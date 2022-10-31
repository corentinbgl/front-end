import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


import { MarvelComponent } from './marvel/marvel.component';
import { MangaComponent } from './manga/manga.component';
import {  HttpClientModule } from '@angular/common/http';
import { DetailcomicsComponent } from './comics/components/detailcomics/detailcomics.component';
import { FooterComponent } from './core/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    MangaComponent,
    DetailcomicsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

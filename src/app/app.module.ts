import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ComicsEdwardComponent } from './comics-edward/comics-edward.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageModule } from './landing-page/landing-page.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  

  ],
  imports: [
    BrowserModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

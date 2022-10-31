import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PanierComponent } from './panier/panier.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    PanierComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PanierComponent,
    FooterComponent
  ]
})
export class CoreModule { }

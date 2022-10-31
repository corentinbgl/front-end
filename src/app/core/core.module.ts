import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PanierComponent } from './panier/panier.component';




@NgModule({
  declarations: [
    HeaderComponent,
    PanierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PanierComponent
  ]
})
export class CoreModule { }

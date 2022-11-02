import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PanierComponent } from './panier/panier.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertPanierComponent } from './alert-panier/alert-panier.component';
import { PanierService } from './services/panier.service';




@NgModule({
  declarations: [
    HeaderComponent,
    PanierComponent,
    FooterComponent,
    AlertPanierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PanierComponent,
    FooterComponent,
    AlertPanierComponent
  ],
  providers: [
    PanierService
  ]
})
export class CoreModule { }

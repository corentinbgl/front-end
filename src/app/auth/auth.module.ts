import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ProfilComponent } from './components/profil/profil.component';


@NgModule({
  declarations: [
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
})
export class AuthModule { }

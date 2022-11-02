import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailcomicsComponent } from './components/detailcomics/detailcomics.component';

const routes: Routes = [
  { path: 'detail/:comics_id', component : DetailcomicsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule {
  
 }

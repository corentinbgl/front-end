import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './marvel/marvel.component';
import { PanierComponent } from './core/panier/panier.component';
import { MangaComponent } from './manga/manga.component';




const routes: Routes = [
    {path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)},  
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path: 'comics', loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule)},
    { path: 'panier', component : PanierComponent },
    { path: 'marvel', component : MarvelComponent },
    { path: 'manga', component : MangaComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
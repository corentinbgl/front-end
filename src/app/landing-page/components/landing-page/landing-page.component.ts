import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../../models/comic.model';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  newComicListe$!: Observable<Comic[]>;
  selectionComicListe$!: Observable<Comic[]>;
  universComicListe$!: Observable<Comic[]>;
  detailComic$!: Observable<Comic[]>;

  constructor(private comicsServices: ComicsService) { }

  ngOnInit(): void {
    this.newComicListe$ = this.comicsServices.getNewComics()
    this.selectionComicListe$ = this.comicsServices.getSelectionComics()
    this.universComicListe$ = this.comicsServices.getUniversComics()
    // this.detailComic$ = this.comicsServices.getDetailComics()
  }

}

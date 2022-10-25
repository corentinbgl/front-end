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
  comicListe$!: Observable<Comic[]>;

  constructor(private comicsServices: ComicsService) { }
  

  ngOnInit(): void {
    this.comicListe$ = this.comicsServices.getComics()
  }

}



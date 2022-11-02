
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Comic } from 'src/app/landing-page/models/comic.model';
import { ComicsService } from 'src/app/landing-page/services/comics.service';


@Component({
  selector: 'app-detailcomics',
  templateUrl: './detailcomics.component.html',
  styleUrls: ['./detailcomics.component.scss']
  
})
export class DetailcomicsComponent implements OnInit {

 

  comic$!: Observable<Comic[]>;
  comicsSame$!: Observable<Comic[]>
  
 
  constructor(private route: ActivatedRoute,
              private comicsService: ComicsService,
              ) { }

  ngOnInit(): void {
    const getRouteParams = this.route.snapshot.paramMap;
    const comicsIdFromRoute = String(getRouteParams.get('comics_id'));
    this.comic$ = this.comicsService.getDetailComicsById(comicsIdFromRoute);
    let cat: string;
    this.comic$.pipe(map((comics: Comic[]) => comics[0].categorie)).subscribe(
      (categorie: string) => this.comicsSame$ = this.comicsService.getComicsByCategorie(categorie)
      );
    
  }
 
  
  
}

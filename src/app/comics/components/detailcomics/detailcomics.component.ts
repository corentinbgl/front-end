
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/landing-page/models/comic.model';
import { ComicsService } from 'src/app/landing-page/services/comics.service';


@Component({
  selector: 'app-detailcomics',
  templateUrl: './detailcomics.component.html',
  styleUrls: ['./detailcomics.component.scss']
  
})
export class DetailcomicsComponent implements OnInit {

 

  comic$!: Observable<Comic[]>;
  comic!: Comic;
  
 
  constructor(private route: ActivatedRoute,
              private comicsService: ComicsService,
              ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const comicsIdFromRoute = String(routeParams.get('comics_id'));
    this.comic$ = this.comicsService.getDetailComicsById(comicsIdFromRoute);
  }
 
  
  
}
